import os

# Define the directory where the images are stored
image_directory = '/Users/sadeeq/Desktop/floodart/construction/images/downloads'

# List all files in the directory
files = os.listdir(image_directory)

# Filter out JPEG files
jpeg_files = [file for file in files if file.lower().endswith('.jpeg')]

# Delete each JPEG file
for jpeg_file in jpeg_files:
    os.remove(os.path.join(image_directory, jpeg_file))

# Print a success message
print("All JPEG files have been successfully deleted, leaving only JPG files.")
