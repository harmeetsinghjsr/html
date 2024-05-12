def text_to_hex(input_file, output_file):
    try:
        with open(input_file, 'r') as f:
            text = f.read()
            hex_data = text.encode().hex()

        with open(output_file, 'w') as f:
            f.write(hex_data)
        
        print(f"Successfully converted '{input_file}' to '{output_file}' in hexadecimal format.")
    except FileNotFoundError:
        print("File not found.")

# Replace 'input.txt' and 'output.hex' with your file names
text_to_hex('input.txt', 'output.hex')