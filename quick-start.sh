#!/bin/bash
# Quick Start Script untuk Ciremai Care
# Jalankan: bash quick-start.sh

echo "🚀 Ciremai Care In Here - Quick Start Ready App"
echo "=============================="
echo ""

# Check Node.js
echo "✓ Checking Node.js..."
if ! command -v node &> /dev/null; then
  echo "✗ Node.js not found. Please install Node.js v18+"
  exit 1
fi
echo "  Node.js version: $(node -v)"
echo ""

# Check npm
echo "✓ Checking npm..."
if ! command -v npm &> /dev/null; then
  echo "✗ npm not found."
  exit 1
fi
echo "  npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps
echo "✓ Dependencies installed"
echo ""

# Copy .env.example to .env.local
if [ ! -f .env.local ]; then
  echo "📝 Creating .env.local..."
  cp .env.example .env.local
  echo "✓ .env.local created from .env.example"
  echo "  ⚠️  Remember to update .env.local with your Google Drive FILE_ID"
else
  echo "✓ .env.local already exists"
fi
echo ""

# Start Expo
echo "🎉 Starting Expo development server..."
echo ""
echo "Next steps:"
echo "  1. Press 'w' to open in web browser"
echo "  2. Press 'a' for Android emulator"
echo "  3. Press 'i' for iOS simulator"
echo "  4. Scan QR code with Expo Go app"
echo ""

npm run web
