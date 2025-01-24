"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! evergreen-ui */ \"(app-pages-browser)/./node_modules/evergreen-ui/esm/alert/src/Alert.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ \"(app-pages-browser)/./node_modules/evergreen-ui/esm/scales/src/majorScale.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! evergreen-ui */ \"(app-pages-browser)/./node_modules/evergreen-ui/esm/layers/src/Pane.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! evergreen-ui */ \"(app-pages-browser)/./node_modules/evergreen-ui/esm/typography/src/Heading.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! evergreen-ui */ \"(app-pages-browser)/./node_modules/evergreen-ui/esm/file-uploader/src/FileUploader.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! evergreen-ui */ \"(app-pages-browser)/./node_modules/evergreen-ui/esm/file-uploader/src/FileCard.js\");\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! evergreen-ui */ \"(app-pages-browser)/./node_modules/evergreen-ui/esm/buttons/src/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/xml */ \"(app-pages-browser)/./src/utils/xml.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    // ===== 状态定义 =====\n    // 组件挂载状态\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // 文件列表\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // 文件拒绝列表\n    const [fileRejections, setFileRejections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // 处理状态\n    const [isProcessing, setIsProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // 错误信息\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // ===== 辅助函数 =====\n    // 添加错误信息\n    const addError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Home.useCallback[addError]\": (error)=>{\n            setErrors({\n                \"Home.useCallback[addError]\": (prev)=>[\n                        ...prev,\n                        error\n                    ]\n            }[\"Home.useCallback[addError]\"]);\n        }\n    }[\"Home.useCallback[addError]\"], []);\n    // ===== 生命周期 =====\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            setIsMounted(true);\n            // 组件卸载时清理文件对象\n            return ({\n                \"Home.useEffect\": ()=>{\n                    files.forEach({\n                        \"Home.useEffect\": (file)=>{\n                            URL.revokeObjectURL(URL.createObjectURL(file));\n                        }\n                    }[\"Home.useEffect\"]);\n                    setIsMounted(false);\n                }\n            })[\"Home.useEffect\"];\n        }\n    }[\"Home.useEffect\"], [\n        files\n    ]);\n    // 服务端渲染保护\n    if ( false || !isMounted) {\n        return null;\n    }\n    // ===== 事件处理函数 =====\n    // 处理文件接受\n    const handleAccepted = (acceptedFiles)=>{\n        // 过滤只接受 .ale 文件\n        const validFiles = acceptedFiles.filter((file)=>file.name.toLowerCase().endsWith('.ale'));\n        // 如果有无效文件，添加错误信息\n        const invalidFiles = acceptedFiles.filter((file)=>!file.name.toLowerCase().endsWith('.ale'));\n        if (invalidFiles.length > 0) {\n            setErrors((prev)=>[\n                    ...prev,\n                    ...invalidFiles.map((file)=>({\n                            type: 'upload',\n                            fileName: file.name,\n                            message: '仅支持 .ale 文件'\n                        }))\n                ]);\n        }\n        setFiles((prev)=>[\n                ...prev,\n                ...validFiles\n            ]);\n        setErrors([]);\n    };\n    // 处理文件拒绝\n    const handleRejected = (rejectedFiles)=>{\n        setFileRejections(rejectedFiles);\n        rejectedFiles.forEach((rejection)=>{\n            addError({\n                type: 'upload',\n                fileName: rejection.file.name,\n                message: rejection.message\n            });\n        });\n    };\n    // 处理文件移除\n    const handleRemove = (file)=>{\n        setFiles(files.filter((f)=>f !== file));\n        setFileRejections(fileRejections.filter((r)=>r.file !== file));\n        setErrors(errors.filter((e)=>e.fileName !== file.name));\n    };\n    // 处理文件处理\n    const handleProcess = async ()=>{\n        setIsProcessing(true);\n        setErrors([]);\n        try {\n            // 串行处理所有文件\n            const successfulFiles = [];\n            for (const file of files){\n                try {\n                    // 处理 XML\n                    const processedXML = await (0,_utils_xml__WEBPACK_IMPORTED_MODULE_2__.processXML)(file, {\n                        width: 1920,\n                        height: 1080,\n                        format: '{scene}_{shot}_{take}{camera}_{Rating}',\n                        prefix: ''\n                    });\n                    // 创建下载\n                    const blob = new Blob([\n                        processedXML\n                    ], {\n                        type: 'text/xml;charset=utf-8'\n                    });\n                    const url = URL.createObjectURL(blob);\n                    // 下载延迟\n                    await new Promise((resolve)=>setTimeout(resolve, 500));\n                    // 触发下载\n                    const a = document.createElement('a');\n                    a.href = url;\n                    a.download = file.name.replace('.xml', '_Double_LOVE.xml');\n                    document.body.appendChild(a);\n                    a.click();\n                    // 清理\n                    await new Promise((resolve)=>setTimeout(resolve, 500));\n                    document.body.removeChild(a);\n                    URL.revokeObjectURL(url);\n                    successfulFiles.push(file);\n                } catch (err) {\n                    addError({\n                        type: 'process',\n                        fileName: file.name,\n                        message: err instanceof Error ? err.message : '处理失败'\n                    });\n                }\n            }\n            // 移除处理成功的文件\n            setFiles((prev)=>prev.filter((f)=>!successfulFiles.includes(f)));\n        } catch (err) {\n            addError({\n                type: 'process',\n                fileName: 'batch',\n                message: err instanceof Error ? err.message : '批量处理失败'\n            });\n        } finally{\n            setIsProcessing(false);\n        }\n    };\n    // ===== 渲染错误提示 =====\n    const renderErrors = ()=>{\n        const errorsByType = {\n            upload: errors.filter((e)=>e.type === 'upload'),\n            process: errors.filter((e)=>e.type === 'process'),\n            download: errors.filter((e)=>e.type === 'download')\n        };\n        return Object.entries(errorsByType).map((param)=>{\n            let [type, typeErrors] = param;\n            if (typeErrors.length === 0) return null;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                intent: \"danger\",\n                title: \"\".concat(type === 'upload' ? '上传' : type === 'process' ? '处理' : '下载', \"错误\"),\n                marginBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2),\n                children: typeErrors.map((err)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            err.fileName,\n                            \": \",\n                            err.message\n                        ]\n                    }, err.fileName, true, {\n                        fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n                        lineNumber: 186,\n                        columnNumber: 13\n                    }, this))\n            }, type, false, {\n                fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n                lineNumber: 179,\n                columnNumber: 9\n            }, this);\n        });\n    };\n    // ===== 组件渲染 =====\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        minHeight: \"100vh\",\n        padding: 16,\n        backgroundColor: \"white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            elevation: 1,\n            backgroundColor: \"white\",\n            padding: 32,\n            borderRadius: 8,\n            width: \"100%\",\n            maxWidth: 600,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    size: 900,\n                    marginBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(4),\n                    textAlign: \"center\",\n                    children: \"ALE-GBK Converter\"\n                }, void 0, false, {\n                    fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n                    lineNumber: 212,\n                    columnNumber: 9\n                }, this),\n                renderErrors(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    label: \"上传 ALE 文件\",\n                    description: \"将文件拖放到此处或点击选择文件。仅支持 .ale 文件。\",\n                    maxSizeInBytes: 50 * 1024 ** 2,\n                    acceptedMimeTypes: [\n                        'application/octet-stream'\n                    ],\n                    onAccepted: handleAccepted,\n                    onRejected: handleRejected,\n                    disabled: isProcessing,\n                    maxFiles: 10,\n                    marginBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(3)\n                }, void 0, false, {\n                    fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n                    lineNumber: 224,\n                    columnNumber: 9\n                }, this),\n                files.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    marginY: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(3),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            size: 400,\n                            marginBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2),\n                            children: \"已上传文件\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n                            lineNumber: 241,\n                            columnNumber: 13\n                        }, this),\n                        files.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                name: file.name,\n                                sizeInBytes: file.size,\n                                onRemove: ()=>handleRemove(file),\n                                marginBottom: (0,evergreen_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(1)\n                            }, \"\".concat(file.name, \"-\").concat(index), false, {\n                                fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n                                lineNumber: 245,\n                                columnNumber: 15\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n                    lineNumber: 240,\n                    columnNumber: 11\n                }, this),\n                files.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(evergreen_ui__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    appearance: \"primary\",\n                    intent: \"primary\",\n                    onClick: handleProcess,\n                    isLoading: isProcessing,\n                    disabled: isProcessing,\n                    width: \"100%\",\n                    height: 40,\n                    \"aria-label\": \"处理 \".concat(files.length, \" 个文件\"),\n                    children: isProcessing ? \"正在处理 \".concat(files.length, \" 个文件...\") : \"处理 \".concat(files.length, \" 个文件\")\n                }, void 0, false, {\n                    fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n                    lineNumber: 258,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n            lineNumber: 203,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/deakins/Documents/ALE2GBK-Converter/src/app/page.tsx\",\n        lineNumber: 195,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dp4bEtUlay2C4yxr+0qva7XdoNQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQXFCLE9BQWJKLE1BQU13QixNQUFNLEVBQUMsYUFBVyxNQUFtQixPQUFieEIsTUFBTXdCLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0U7R0EzUHdCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWFraW5zL0RvY3VtZW50cy9BTEUyR0JLLUNvbnZlcnRlci9zcmMvYXBwL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBcbiAgUGFuZSwgXG4gIEZpbGVVcGxvYWRlciwgXG4gIEZpbGVDYXJkLCBcbiAgQWxlcnQsIFxuICBIZWFkaW5nLCBcbiAgQnV0dG9uLFxuICBtYWpvclNjYWxlLFxuICBNaW1lVHlwZVxufSBmcm9tICdldmVyZ3JlZW4tdWknXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHByb2Nlc3NYTUwgfSBmcm9tICdAL3V0aWxzL3htbCdcblxuLy8g5a6a5LmJ6ZSZ6K+v57G75Z6LXG50eXBlIFByb2Nlc3NFcnJvciA9IHtcbiAgdHlwZTogJ3VwbG9hZCcgfCAncHJvY2VzcycgfCAnZG93bmxvYWQnO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGZpbGVOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vID09PT09IOeKtuaAgeWumuS5iSA9PT09PVxuICAvLyDnu4Tku7bmjILovb3nirbmgIFcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAvLyDmlofku7bliJfooahcbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxGaWxlW10+KFtdKVxuICAvLyDmlofku7bmi5Lnu53liJfooahcbiAgY29uc3QgW2ZpbGVSZWplY3Rpb25zLCBzZXRGaWxlUmVqZWN0aW9uc10gPSB1c2VTdGF0ZTx7IGZpbGU6IEZpbGU7IG1lc3NhZ2U6IHN0cmluZyB9W10+KFtdKVxuICAvLyDlpITnkIbnirbmgIFcbiAgY29uc3QgW2lzUHJvY2Vzc2luZywgc2V0SXNQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAvLyDplJnor6/kv6Hmga9cbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlPFByb2Nlc3NFcnJvcltdPihbXSlcblxuICAvLyA9PT09PSDovoXliqnlh73mlbAgPT09PT1cbiAgLy8g5re75Yqg6ZSZ6K+v5L+h5oGvXG4gIGNvbnN0IGFkZEVycm9yID0gdXNlQ2FsbGJhY2soKGVycm9yOiBQcm9jZXNzRXJyb3IpID0+IHtcbiAgICBzZXRFcnJvcnMocHJldiA9PiBbLi4ucHJldiwgZXJyb3JdKVxuICB9LCBbXSlcblxuICAvLyA9PT09PSDnlJ/lkb3lkajmnJ8gPT09PT1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSlcbiAgICAvLyDnu4Tku7bljbjovb3ml7bmuIXnkIbmlofku7blr7nosaFcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKVxuICAgICAgfSlcbiAgICAgIHNldElzTW91bnRlZChmYWxzZSlcbiAgICB9XG4gIH0sIFtmaWxlc10pXG5cbiAgLy8g5pyN5Yqh56uv5riy5p+T5L+d5oqkXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaXNNb3VudGVkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vID09PT09IOS6i+S7tuWkhOeQhuWHveaVsCA9PT09PVxuICAvLyDlpITnkIbmlofku7bmjqXlj5dcbiAgY29uc3QgaGFuZGxlQWNjZXB0ZWQgPSAoYWNjZXB0ZWRGaWxlczogRmlsZVtdKSA9PiB7XG4gICAgLy8g6L+H5ruk5Y+q5o6l5Y+XIC5hbGUg5paH5Lu2XG4gICAgY29uc3QgdmFsaWRGaWxlcyA9IGFjY2VwdGVkRmlsZXMuZmlsdGVyKGZpbGUgPT4gXG4gICAgICBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLmFsZScpXG4gICAgKVxuICAgIFxuICAgIC8vIOWmguaenOacieaXoOaViOaWh+S7tu+8jOa3u+WKoOmUmeivr+S/oeaBr1xuICAgIGNvbnN0IGludmFsaWRGaWxlcyA9IGFjY2VwdGVkRmlsZXMuZmlsdGVyKGZpbGUgPT4gXG4gICAgICAhZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5hbGUnKVxuICAgIClcbiAgICBcbiAgICBpZiAoaW52YWxpZEZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldEVycm9ycyhwcmV2ID0+IFtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgLi4uaW52YWxpZEZpbGVzLm1hcChmaWxlID0+ICh7XG4gICAgICAgICAgdHlwZTogJ3VwbG9hZCcgYXMgY29uc3QsXG4gICAgICAgICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBtZXNzYWdlOiAn5LuF5pSv5oyBIC5hbGUg5paH5Lu2J1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgfVxuXG4gICAgc2V0RmlsZXMocHJldiA9PiBbLi4ucHJldiwgLi4udmFsaWRGaWxlc10pXG4gICAgc2V0RXJyb3JzKFtdKVxuICB9XG5cbiAgLy8g5aSE55CG5paH5Lu25ouS57udXG4gIGNvbnN0IGhhbmRsZVJlamVjdGVkID0gKHJlamVjdGVkRmlsZXM6IHsgZmlsZTogRmlsZTsgbWVzc2FnZTogc3RyaW5nIH1bXSkgPT4ge1xuICAgIHNldEZpbGVSZWplY3Rpb25zKHJlamVjdGVkRmlsZXMpXG4gICAgcmVqZWN0ZWRGaWxlcy5mb3JFYWNoKHJlamVjdGlvbiA9PiB7XG4gICAgICBhZGRFcnJvcih7XG4gICAgICAgIHR5cGU6ICd1cGxvYWQnLFxuICAgICAgICBmaWxlTmFtZTogcmVqZWN0aW9uLmZpbGUubmFtZSxcbiAgICAgICAgbWVzc2FnZTogcmVqZWN0aW9uLm1lc3NhZ2VcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIOWkhOeQhuaWh+S7tuenu+mZpFxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoZmlsZTogRmlsZSkgPT4ge1xuICAgIHNldEZpbGVzKGZpbGVzLmZpbHRlcihmID0+IGYgIT09IGZpbGUpKVxuICAgIHNldEZpbGVSZWplY3Rpb25zKGZpbGVSZWplY3Rpb25zLmZpbHRlcihyID0+IHIuZmlsZSAhPT0gZmlsZSkpXG4gICAgc2V0RXJyb3JzKGVycm9ycy5maWx0ZXIoZSA9PiBlLmZpbGVOYW1lICE9PSBmaWxlLm5hbWUpKVxuICB9XG5cbiAgLy8g5aSE55CG5paH5Lu25aSE55CGXG4gIGNvbnN0IGhhbmRsZVByb2Nlc3MgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNQcm9jZXNzaW5nKHRydWUpXG4gICAgc2V0RXJyb3JzKFtdKVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAvLyDkuLLooYzlpITnkIbmiYDmnInmlofku7ZcbiAgICAgIGNvbnN0IHN1Y2Nlc3NmdWxGaWxlczogRmlsZVtdID0gW107XG4gICAgICBcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIOWkhOeQhiBYTUxcbiAgICAgICAgICBjb25zdCBwcm9jZXNzZWRYTUwgPSBhd2FpdCBwcm9jZXNzWE1MKGZpbGUsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOTIwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDgwLFxuICAgICAgICAgICAgZm9ybWF0OiAne3NjZW5lfV97c2hvdH1fe3Rha2V9e2NhbWVyYX1fe1JhdGluZ30nLFxuICAgICAgICAgICAgcHJlZml4OiAnJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8g5Yib5bu65LiL6L29XG4gICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtwcm9jZXNzZWRYTUxdLCB7IHR5cGU6ICd0ZXh0L3htbDtjaGFyc2V0PXV0Zi04JyB9KTtcbiAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIOS4i+i9veW7tui/n1xuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDop6blj5HkuIvovb1cbiAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgICAgICBhLmRvd25sb2FkID0gZmlsZS5uYW1lLnJlcGxhY2UoJy54bWwnLCAnX0RvdWJsZV9MT1ZFLnhtbCcpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgYS5jbGljaygpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIOa4heeQhlxuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICBcbiAgICAgICAgICBzdWNjZXNzZnVsRmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgYWRkRXJyb3Ioe1xuICAgICAgICAgICAgdHlwZTogJ3Byb2Nlc3MnLFxuICAgICAgICAgICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAn5aSE55CG5aSx6LSlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOenu+mZpOWkhOeQhuaIkOWKn+eahOaWh+S7tlxuICAgICAgc2V0RmlsZXMocHJldiA9PiBwcmV2LmZpbHRlcihmID0+ICFzdWNjZXNzZnVsRmlsZXMuaW5jbHVkZXMoZikpKTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWRkRXJyb3Ioe1xuICAgICAgICB0eXBlOiAncHJvY2VzcycsXG4gICAgICAgIGZpbGVOYW1lOiAnYmF0Y2gnLFxuICAgICAgICBtZXNzYWdlOiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ+aJuemHj+WkhOeQhuWksei0pSdcbiAgICAgIH0pXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzUHJvY2Vzc2luZyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PSDmuLLmn5PplJnor6/mj5DnpLogPT09PT1cbiAgY29uc3QgcmVuZGVyRXJyb3JzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yc0J5VHlwZSA9IHtcbiAgICAgIHVwbG9hZDogZXJyb3JzLmZpbHRlcihlID0+IGUudHlwZSA9PT0gJ3VwbG9hZCcpLFxuICAgICAgcHJvY2VzczogZXJyb3JzLmZpbHRlcihlID0+IGUudHlwZSA9PT0gJ3Byb2Nlc3MnKSxcbiAgICAgIGRvd25sb2FkOiBlcnJvcnMuZmlsdGVyKGUgPT4gZS50eXBlID09PSAnZG93bmxvYWQnKVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhlcnJvcnNCeVR5cGUpLm1hcCgoW3R5cGUsIHR5cGVFcnJvcnNdKSA9PiB7XG4gICAgICBpZiAodHlwZUVycm9ycy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QWxlcnRcbiAgICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgICAgaW50ZW50PVwiZGFuZ2VyXCJcbiAgICAgICAgICB0aXRsZT17YCR7dHlwZSA9PT0gJ3VwbG9hZCcgPyAn5LiK5LygJyA6IHR5cGUgPT09ICdwcm9jZXNzJyA/ICflpITnkIYnIDogJ+S4i+i9vSd96ZSZ6K+vYH1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e21ham9yU2NhbGUoMil9XG4gICAgICAgID5cbiAgICAgICAgICB7dHlwZUVycm9ycy5tYXAoZXJyID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtlcnIuZmlsZU5hbWV9PntlcnIuZmlsZU5hbWV9OiB7ZXJyLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIC8vID09PT09IOe7hOS7tua4suafkyA9PT09PVxuICByZXR1cm4gKFxuICAgIDxQYW5lIFxuICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICBtaW5IZWlnaHQ9XCIxMDB2aFwiXG4gICAgICBwYWRkaW5nPXsxNn1cbiAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICA+XG4gICAgICA8UGFuZSBcbiAgICAgICAgZWxldmF0aW9uPXsxfSBcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICBwYWRkaW5nPXszMn0gXG4gICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgbWF4V2lkdGg9ezYwMH1cbiAgICAgID5cbiAgICAgICAgey8qIOagh+mimCAqL31cbiAgICAgICAgPEhlYWRpbmcgXG4gICAgICAgICAgc2l6ZT17OTAwfSBcbiAgICAgICAgICBtYXJnaW5Cb3R0b209e21ham9yU2NhbGUoNCl9IFxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICBBTEUtR0JLIENvbnZlcnRlclxuICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgey8qIOmUmeivr+aPkOekuiAqL31cbiAgICAgICAge3JlbmRlckVycm9ycygpfVxuXG4gICAgICAgIHsvKiDmlofku7bkuIrkvKDljLrln58gKi99XG4gICAgICAgIDxGaWxlVXBsb2FkZXJcbiAgICAgICAgICBsYWJlbD1cIuS4iuS8oCBBTEUg5paH5Lu2XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIuWwhuaWh+S7tuaLluaUvuWIsOatpOWkhOaIlueCueWHu+mAieaLqeaWh+S7tuOAguS7heaUr+aMgSAuYWxlIOaWh+S7tuOAglwiXG4gICAgICAgICAgbWF4U2l6ZUluQnl0ZXM9ezUwICogMTAyNCAqKiAyfVxuICAgICAgICAgIGFjY2VwdGVkTWltZVR5cGVzPXtbXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyBhcyBNaW1lVHlwZVxuICAgICAgICAgIF19XG4gICAgICAgICAgb25BY2NlcHRlZD17aGFuZGxlQWNjZXB0ZWR9XG4gICAgICAgICAgb25SZWplY3RlZD17aGFuZGxlUmVqZWN0ZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzUHJvY2Vzc2luZ31cbiAgICAgICAgICBtYXhGaWxlcz17MTB9XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXttYWpvclNjYWxlKDMpfVxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgey8qIOW3suS4iuS8oOaWh+S7tuWIl+ihqCAqL31cbiAgICAgICAge2ZpbGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxQYW5lIG1hcmdpblk9e21ham9yU2NhbGUoMyl9PlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT17NDAwfSBtYXJnaW5Cb3R0b209e21ham9yU2NhbGUoMil9PlxuICAgICAgICAgICAgICDlt7LkuIrkvKDmlofku7ZcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxGaWxlQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17YCR7ZmlsZS5uYW1lfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgbmFtZT17ZmlsZS5uYW1lfVxuICAgICAgICAgICAgICAgIHNpemVJbkJ5dGVzPXtmaWxlLnNpemV9XG4gICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IGhhbmRsZVJlbW92ZShmaWxlKX1cbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209e21ham9yU2NhbGUoMSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIOWkhOeQhuaMiemSriAqL31cbiAgICAgICAge2ZpbGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGludGVudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJvY2Vzc31cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNQcm9jZXNzaW5nfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJvY2Vzc2luZ31cbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YOWkhOeQhiAke2ZpbGVzLmxlbmd0aH0g5Liq5paH5Lu2YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNQcm9jZXNzaW5nID8gYOato+WcqOWkhOeQhiAke2ZpbGVzLmxlbmd0aH0g5Liq5paH5Lu2Li4uYCA6IGDlpITnkIYgJHtmaWxlcy5sZW5ndGh9IOS4quaWh+S7tmB9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1BhbmU+XG4gICAgPC9QYW5lPlxuICApXG59XG4iXSwibmFtZXMiOlsiUGFuZSIsIkZpbGVVcGxvYWRlciIsIkZpbGVDYXJkIiwiQWxlcnQiLCJIZWFkaW5nIiwiQnV0dG9uIiwibWFqb3JTY2FsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInByb2Nlc3NYTUwiLCJIb21lIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwiZmlsZXMiLCJzZXRGaWxlcyIsImZpbGVSZWplY3Rpb25zIiwic2V0RmlsZVJlamVjdGlvbnMiLCJpc1Byb2Nlc3NpbmciLCJzZXRJc1Byb2Nlc3NpbmciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJhZGRFcnJvciIsImVycm9yIiwicHJldiIsImZvckVhY2giLCJmaWxlIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQWNjZXB0ZWQiLCJhY2NlcHRlZEZpbGVzIiwidmFsaWRGaWxlcyIsImZpbHRlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImVuZHNXaXRoIiwiaW52YWxpZEZpbGVzIiwibGVuZ3RoIiwibWFwIiwidHlwZSIsImZpbGVOYW1lIiwibWVzc2FnZSIsImhhbmRsZVJlamVjdGVkIiwicmVqZWN0ZWRGaWxlcyIsInJlamVjdGlvbiIsImhhbmRsZVJlbW92ZSIsImYiLCJyIiwiZSIsImhhbmRsZVByb2Nlc3MiLCJzdWNjZXNzZnVsRmlsZXMiLCJwcm9jZXNzZWRYTUwiLCJ3aWR0aCIsImhlaWdodCIsImZvcm1hdCIsInByZWZpeCIsImJsb2IiLCJCbG9iIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsInJlcGxhY2UiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwicHVzaCIsImVyciIsIkVycm9yIiwiaW5jbHVkZXMiLCJyZW5kZXJFcnJvcnMiLCJlcnJvcnNCeVR5cGUiLCJ1cGxvYWQiLCJwcm9jZXNzIiwiT2JqZWN0IiwiZW50cmllcyIsInR5cGVFcnJvcnMiLCJpbnRlbnQiLCJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsImRpdiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiZWxldmF0aW9uIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJzaXplIiwidGV4dEFsaWduIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsIm1heFNpemVJbkJ5dGVzIiwiYWNjZXB0ZWRNaW1lVHlwZXMiLCJvbkFjY2VwdGVkIiwib25SZWplY3RlZCIsImRpc2FibGVkIiwibWF4RmlsZXMiLCJtYXJnaW5ZIiwiaW5kZXgiLCJzaXplSW5CeXRlcyIsIm9uUmVtb3ZlIiwiYXBwZWFyYW5jZSIsIm9uQ2xpY2siLCJpc0xvYWRpbmciLCJhcmlhLWxhYmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});