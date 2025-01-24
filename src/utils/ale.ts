import iconv from 'iconv-lite';

export class ALEConverter {
  /**
   * 将UTF-8编码的ALE文件内容转换为GBK编码
   * @param file - 要转换的File对象
   * @returns 转换后的Blob对象
   */
  static async convertToGBK(file: File): Promise<Blob> {
    try {
      // 读取文件内容
      const buffer = await file.arrayBuffer();
      
      // 将UTF-8解码为字符串
      const utf8Decoder = new TextDecoder('utf-8');
      const text = utf8Decoder.decode(buffer);
      
      // 解析ALE文件结构
      const aleData = this.parseALEFile(text);
      
      // 将数据转换为GBK编码
      const serializedText = this.serializeALEFile(aleData);
      
      // 使用iconv-lite进行GBK编码
      const gbkBuffer = iconv.encode(serializedText, 'gbk');
      
      return new Blob([gbkBuffer], { type: 'text/plain;charset=gbk' });
      
    } catch (error) {
      throw new Error(`ALE文件转换失败: ${error instanceof Error ? error.message : '未知错误'}`);
    }
  }

  /**
   * 解析ALE文件内容
   * @param text - ALE文件文本内容
   * @returns 解析后的ALE文件对象
   */
  private static parseALEFile(text: string): ALEFile {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    // 解析头部
    const header = lines[0];
    
    // 解析列头
    const columnHeaders = lines[1].split('\t');
    
    // 解析数据行
    const data = lines.slice(2).map(line => line.split('\t'));
    
    return {
      header,
      columnHeaders,
      data
    };
  }

  /**
   * 将ALE文件对象序列化为字符串
   * @param aleData - ALE文件对象
   * @returns 序列化后的字符串
   */
  private static serializeALEFile(aleData: ALEFile): string {
    const lines = [
      aleData.header,
      aleData.columnHeaders.join('\t'),
      ...aleData.data.map(row => row.join('\t'))
    ];
    
    return lines.join('\n');
  }

  /**
   * 验证ALE文件格式
   * @param file - 要验证的文件
   * @returns 是否是有效的ALE文件
   */
  static async validateALEFile(file: File): Promise<boolean> {
    try {
      const buffer = await file.arrayBuffer();
      const text = new TextDecoder('utf-8').decode(buffer);
      const lines = text.split('\n').filter(line => line.trim() !== '');
      
      // 基本格式验证
      return lines.length >= 3 && 
             lines[0].startsWith('FIELD_DELIM') && 
             lines[1].split('\t').length > 1;
    } catch {
      return false;
    }
  }
}

interface ALEFile {
  header: string;
  columnHeaders: string[];
  data: string[][];
}
