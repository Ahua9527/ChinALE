import os
from pathlib import Path

def convert_ale_encoding(input_file_path):
    try:
        input_path = Path(input_file_path)
        
        if not input_path.exists():
            print(f"文件未找到：{input_file_path}")
            return
        
        # 提取文件名和扩展名
        name, ext = input_path.stem, input_path.suffix
        
        if ext.lower() != '.ale':
            print("文件类型不正确，必须是 .ale 文件。")
            return
        
        # 生成输出文件路径
        output_file_path = input_path.with_name(f"{name}_GBK{ext}")
        
        # 读取 UTF-8 编码的 ALE 文件
        with input_path.open('r', encoding='utf-8') as file:
            content = file.read()

        # 将内容保存为 GBK 编码的 ALE 文件
        with output_file_path.open('w', encoding='gbk') as file:
            file.write(content)

        print(f"文件已成功从 UTF-8 编码转换为 GBK 编码并保存到 {output_file_path}")

        # 根据操作系统自动打开目标文件夹
        if os.name == 'posix':
            os.system(f'open -R "{output_file_path}"')  # macOS
        elif os.name == 'nt':
            os.system(f'explorer /select,"{output_file_path}"')  # Windows
        else:
            print("自动打开文件夹功能在此操作系统上不可用。")

    except UnicodeDecodeError:
        print(f"文件编码错误：{input_file_path} 可能不是 UTF-8 编码")
    except Exception as e:
        print(f"发生错误：{e}")

if __name__ == "__main__":
    # 直接传入文件路径
    input_ale_file = "path/to/your/input/file.ale"  # 替换为实际路径
    convert_ale_encoding(input_ale_file)
