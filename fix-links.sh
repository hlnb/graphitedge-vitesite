#!/bin/bash

# Create this script in your project root
# Make it executable with: chmod +x fix-links.sh

find docs -type f -name "*.md" -exec sed -i '' \
  -e 's|/tutorials/basics/html-101|/tutorials/beginner/html-basics|g' \
  -e 's|/tutorials/basics/css-basics|/tutorials/beginner/css-basics|g' \
  -e 's|/tutorials/basics/javascript-introduction|/tutorials/beginner/javascript/introduction|g' \
  -e 's|/tutorials/basics/image-links|/tutorials/beginner/image-links|g' \
  -e 's|/tutorials/basics/forms|/tutorials/beginner/forms/basic-forms|g' \
  -e 's|/tutorials/tailwind/photo-gallery|/tutorials/intermediate/photo-gallery/tailwind-gallery|g' \
  {} \; 