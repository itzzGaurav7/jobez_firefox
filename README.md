````markdown
# 🌟 **Jobez - Company & Review Search Extension**

# FireFox Version

**Jobez** is a browser extension that helps you easily search for company reviews and details on popular platforms like **AmbitionBox** and **Glassdoor** by simply right-clicking on selected text. 🔍✨

## 📦 **Features**

- ✅ **Search company reviews** on AmbitionBox and Glassdoor with just a right-click.
- ✅ **Dynamic search engine options** that let you select the platforms you want to search from.
- ✅ **Search across all selected platforms** in one go.
- ✅ **Persistent storage** that remembers your selected search engines between sessions.

## 🚀 **How to Use**

### 1. **Install the Extension**:

- Clone or download this repository.

- For **Firefox**:
  - Go to `about:debugging` in your browser.
  - Click **This Firefox**.
  - Click **Load Temporary Add-On** and select the extension's `manifest.json` file.

### 2. **Search with Jobez**:

- **Right-click** on the selected company name or any text in your browser.
- You will see context menu options like:
  - **Find '%s' on AmbitionBox**
  - **Find '%s' on Glassdoor**
  - **Search '%s' on all selected platforms**

### 3. **Search Across All Platforms**:

- After selecting text, click on **Search '%s' on all selected platforms** to open multiple tabs with search results from all the platforms you selected.

### 4. **Customize Your Search Engines**:

- The extension lets you choose which search platforms (AmbitionBox, Glassdoor, etc.) you want to use. The preferences will be saved, and you can update them anytime.

## 🛠️ **How It Works**

- The extension adds context menu options when you **right-click** on text. You can select which platform to search or choose to search across multiple platforms.
- When you select a company name or keyword, it opens the corresponding search page on **AmbitionBox** or **Glassdoor**, making it easy to find reviews and other company information.
- You can configure which search engines (AmbitionBox, Glassdoor, etc.) appear in the context menu.

## 💾 **Storage**

- Jobez uses **Storage API** to remember your selected search engines, so your preferences are saved across sessions.

## ⚙️ **Development**

### 1. Clone this repository:

```bash
git clone https://github.com/itzzGaurav7/jobez_firefox
```
````

### 2. Navigate to the project directory:

```bash
cd jobez_firefox
```

### 3. Install dependencies (if applicable):

```bash
npm install
```

### 4. **For Chrome**:

- Open the extension folder in Chrome via `chrome://extensions/` and enable **Developer Mode**.
- Click **Load Unpacked** and select the extension folder.

### 5. **For Firefox**:

- Open Firefox and go to `about:debugging`.
- Click **This Firefox**.
- Click **Load Temporary Add-On** and select the extension's `manifest.json` file.

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
