'use client'

import { 
  Pane, 
  FileUploader, 
  FileCard, 
  Alert, 
  Heading, 
  Button,
  majorScale,
  MimeType
} from 'evergreen-ui'
import React, { useEffect, useState, useCallback } from 'react'
import { ALEConverter } from '@/utils/ale'

// 定义错误类型
type ProcessError = {
  type: 'upload' | 'process' | 'download';
  message: string;
  fileName: string;
}

export default function Home() {
  // ===== 状态定义 =====
  // 组件挂载状态
  const [isMounted, setIsMounted] = useState(false)
  // 文件列表
  const [files, setFiles] = useState<File[]>([])
  // 文件拒绝列表
  const [fileRejections, setFileRejections] = useState<{ file: File; message: string }[]>([])
  // 转换状态
  const [isProcessing, setIsProcessing] = useState(false)
  // 错误信息
  const [errors, setErrors] = useState<ProcessError[]>([])

  // ===== 辅助函数 =====
  // 添加错误信息
  const addError = useCallback((error: ProcessError) => {
    setErrors(prev => [...prev, error])
  }, [])

  // ===== 生命周期 =====
  useEffect(() => {
    setIsMounted(true)
    // 组件卸载时清理文件对象
    return () => {
      files.forEach(file => {
        URL.revokeObjectURL(URL.createObjectURL(file))
      })
      setIsMounted(false)
    }
  }, [files])

  // 服务端渲染保护
  if (typeof window === 'undefined' || !isMounted) {
    return null
  }

  // ===== 事件转换函数 =====
  // 转换文件接受
  const handleAccepted = (acceptedFiles: File[]) => {
    // 过滤只接受 .ale 文件
    const validFiles = acceptedFiles.filter(file => 
      file.name.toLowerCase().endsWith('.ale')
    )
    
    // 如果有无效文件，添加错误信息
    const invalidFiles = acceptedFiles.filter(file => 
      !file.name.toLowerCase().endsWith('.ale')
    )
    
    if (invalidFiles.length > 0) {
      setErrors(prev => [
        ...prev,
        ...invalidFiles.map(file => ({
          type: 'upload' as const,
          fileName: file.name,
          message: '仅支持 .ale 文件'
        }))
      ])
    }

    setFiles(prev => [...prev, ...validFiles])
    setErrors([])
  }

  // 转换文件拒绝
  const handleRejected = (rejectedFiles: { file: File; message: string }[]) => {
    setFileRejections(rejectedFiles)
    rejectedFiles.forEach(rejection => {
      addError({
        type: 'upload',
        fileName: rejection.file.name,
        message: rejection.message
      })
    })
  }

  // 转换文件移除
  const handleRemove = (file: File) => {
    setFiles(files.filter(f => f !== file))
    setFileRejections(fileRejections.filter(r => r.file !== file))
    setErrors(errors.filter(e => e.fileName !== file.name))
  }

  // 转换文件转换
  const handleProcess = async () => {
    setIsProcessing(true)
    setErrors([])
    
    try {
      // 串行转换所有文件
      const successfulFiles: File[] = [];
      
      for (const file of files) {
        try {
          // 转换编码
          const blob = await ALEConverter.convertToGBK(file);
          const url = URL.createObjectURL(blob);
          
          // 下载延迟
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // 触发下载
          const a = document.createElement('a');
          a.href = url;
          a.download = file.name.replace('.ale', '_GBK.ale');
          document.body.appendChild(a);
          a.click();
          
          // 清理
          await new Promise(resolve => setTimeout(resolve, 500));
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          successfulFiles.push(file);
        } catch (err) {
          addError({
            type: 'process',
            fileName: file.name,
            message: err instanceof Error ? err.message : '转换失败'
          });
        }
      }

      // 移除转换成功的文件
      setFiles(prev => prev.filter(f => !successfulFiles.includes(f)));
      
    } catch (err) {
      addError({
        type: 'process',
        fileName: 'batch',
        message: err instanceof Error ? err.message : '批量转换失败'
      })
    } finally {
      setIsProcessing(false)
    }
  }

  // ===== 渲染错误提示 =====
  const renderErrors = () => {
    const errorsByType = {
      upload: errors.filter(e => e.type === 'upload'),
      process: errors.filter(e => e.type === 'process'),
      download: errors.filter(e => e.type === 'download')
    }

    return Object.entries(errorsByType).map(([type, typeErrors]) => {
      if (typeErrors.length === 0) return null
      return (
        <Alert
          key={type}
          intent="danger"
          title={`${type === 'upload' ? '上传' : type === 'process' ? '转换' : '下载'}错误`}
          marginBottom={majorScale(2)}
        >
          {typeErrors.map(err => (
            <div key={err.fileName}>{err.fileName}: {err.message}</div>
          ))}
        </Alert>
      )
    })
  }

  // ===== 组件渲染 =====
  return (
    <Pane 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="100vh"
      padding={16}
      backgroundColor="white"
    >
      <Pane 
        elevation={1} 
        backgroundColor="white"
        padding={32} 
        borderRadius={8}
        width="100%"
        maxWidth={600}
      >
        {/* 标题 */}
        <Heading 
          size={900} 
          marginBottom={majorScale(4)} 
          textAlign="center"
        >
          ALE-GBK Converter
        </Heading>

        {/* 错误提示 */}
        {renderErrors()}

        {/* 文件上传区域 */}
        <FileUploader
          label="上传 ALE 文件"
          description="将文件拖放到此处或点击选择文件。仅支持 .ale 文件。"
          maxSizeInBytes={50 * 1024 ** 2}
          // Accept all files - filtering done in handleAccepted
          onAccepted={handleAccepted}
          onRejected={handleRejected}
          disabled={isProcessing}
          maxFiles={10}
          marginBottom={majorScale(3)}
        />
        
        {/* 已上传文件列表 */}
        {files.length > 0 && (
          <Pane marginY={majorScale(3)}>
            <Heading size={400} marginBottom={majorScale(2)}>
              已上传文件
            </Heading>
            {files.map((file, index) => (
              <FileCard
                key={`${file.name}-${index}`}
                name={file.name}
                sizeInBytes={file.size}
                onRemove={() => handleRemove(file)}
                marginBottom={majorScale(1)}
              />
            ))}
          </Pane>
        )}

        {/* 转换按钮 */}
        {files.length > 0 && (
          <Button
            appearance="primary"
            intent="primary"
            onClick={handleProcess}
            isLoading={isProcessing}
            disabled={isProcessing}
            width="100%"
            height={40}
            aria-label={`转换 ${files.length} 个文件`}
          >
            {isProcessing ? `正在转换 ${files.length} 个文件...` : `转换 ${files.length} 个文件`}
          </Button>
        )}
      </Pane>
    </Pane>
  )
}
