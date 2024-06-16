import os

# Define the directory where the images are stored
image_directory = '/Users/sadeeq/Desktop/floodart/construction/images/downloads'

# List all files in the directory
files = os.listdir(image_directory)

# Filter out non-image files if necessary
images = [file for file in files if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]

# Sort the images if necessary
images.sort()

# Check if there are more than 15 images and limit the list if necessary
images = images[:15] if len(images) > 15 else images

# Rename the images
for i, image in enumerate(images):
    # Define the new name with leading zeros for single digit numbers
    new_name = f"{i+1}{os.path.splitext(image)[1]}"
    
    # Rename the image
    os.rename(os.path.join(image_directory, image), os.path.join(image_directory, new_name))

# Print a success message
print(f"Images have been successfully renamed to 'portfolio-01' through 'portfolio-{len(images):02}'")
