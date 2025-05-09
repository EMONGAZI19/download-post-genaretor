document.getElementById('movieForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const getVal = id => document.getElementById(id).value.trim();

  const html = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${getVal('title')}</title>
  <style>
    body {
      background-color: #111;
      color: #fff;
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #222;
      padding: 20px 10px;
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      color: #0ff;
      text-shadow: 1px 1px 4px rgba(0, 255, 255, 0.6);
    }
    .notice {
      background-color: #1e1e1e;
      border: 1px solid #0ff;
      border-left: 5px solid #0ff;
      padding: 15px;
      margin: 20px auto;
      border-radius: 8px;
      max-width: 800px;
      font-size: 15px;
      line-height: 1.6;
      color: #eee;
      box-shadow: 0 0 6px rgba(0, 255, 255, 0.08);
      position: relative;
    }
    .notice::before {
      content: "NOTICE";
      position: absolute;
      top: -10px;
      left: 12px;
      background-color: #0ff;
      color: #000;
      font-weight: bold;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      box-shadow: 0 0 4px rgba(0, 255, 255, 0.2);
    }
    .section-title {
      background-color: #333;
      margin: 15px auto;
      padding: 12px;
      font-size: 20px;
      font-weight: bold;
      border-radius: 6px;
      text-align: center;
      color: #fff;
      max-width: 600px;
      box-shadow: 1px 1px 5px rgba(0, 255, 255, 0.25);
    }
    .quality-block {
      margin: 15px auto;
      padding: 20px;
      background-color: #1a1a1a;
      border-radius: 8px;
      max-width: 600px;
      text-align: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    }
    .quality-title {
      font-size: 18px;
      margin-bottom: 8px;
      color: #0ff;
      font-weight: bold;
      text-transform: uppercase;
    }
    .link-group {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 8px;
    }
    .link-group a {
      background-color: #0ff;
      color: #000;
      padding: 10px 16px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
      min-width: 90px;
      font-size: 14px;
      transition: background 0.3s, transform 0.2s;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .link-group a:hover {
      background-color: #00bcd4;
      transform: translateY(-2px);
    }
    footer {
      text-align: center;
      padding: 18px;
      background-color: #222;
      color: #999;
      font-size: 14px;
    }
  </style>
</head>
<body>

<header>DOWNLOAD</header>

<div class="notice">
  <strong>Fast Download</strong> আপনার নেট স্পিড এর উপর নির্ভর করে। অতিরিক্ত ভিজিটরের কারণে যদি ওয়ান ক্লিক <strong>GDrive-1, 2, 3</strong> থেকে ডাউনলোড না হয়, তাহলে অন্যান্য <strong>২-টি অপশন</strong> <strong>GDTOT</strong> ও <strong>FilePress</strong> নিচে দেওয়া আছে ঐ গুলো দিয়ে ডাউনলোড করবেন। টেকনিক্যাল সমস্যায় সব লিংক কাজ না করলে রি-আপলোড <strong>রিকোয়েস্ট</strong> করুন। রিকোয়েস্টের আগে টেলিগ্রাম চ্যানেলের পিন পোস্টটি দেখে নিন।
</div>

<div class="section-title">${getVal('titlemain')}</div>

<div class="notice" style="border-left-color: #0f0; border-color: #0f0; box-shadow: 0 0 8px rgba(0, 255, 0, 0.2);">
  <strong style="color: #0f0;">দ্রুত অনলাইন স্ট্রিমিং:</strong> 
  আপনি চাইলে মুভিটি সরাসরি <strong style="color:#0f0;">GDTOT</strong> থেকে অনলাইনে দেখতে পারেন। এটি সবচেয়ে সহজ ও দ্রুত মাধ্যম!
</div>

<div class="quality-block">
  <div class="quality-title">Quality - 480P</div>
  <div class="link-group">
    <a href="${getVal('480pgdrive1')}">GDrive-1</a>
    <a href="${getVal('480pgdrive2')}">GDrive-2</a>
    <a href="${getVal('480pgdrive3')}">GDrive-3</a>
  </div>
  <div class="link-group">
    <a href="${getVal('gdtot480p')}">GDTOT</a>
    <a href="${getVal('filepress480p')}">FilePress</a>
  </div>
</div>

<div class="quality-block">
  <div class="quality-title">Quality - 720P</div>
  <div class="link-group">
    <a href="${getVal('720pgdrive1')}">GDrive-1</a>
    <a href="${getVal('720pgdrive2')}">GDrive-2</a>
    <a href="${getVal('720pgdrive3')}">GDrive-3</a>
  </div>
  <div class="link-group">
    <a href="${getVal('gdtot720p')}">GDTOT</a>
    <a href="${getVal('filepress720p')}">FilePress</a>
  </div>
</div>

<div class="quality-block">
  <div class="quality-title">Quality - 1080P</div>
  <div class="link-group">
    <a href="${getVal('1080pgdrive1')}">GDrive-1</a>
    <a href="${getVal('1080pgdrive2')}">GDrive-2</a>
    <a href="${getVal('1080pgdrive3')}">GDrive-3</a>
  </div>
  <div class="link-group">
    <a href="${getVal('gdtot1080p')}">GDTOT</a>
    <a href="${getVal('filepress1080p')}">FilePress</a>
  </div>
</div>

<div class="notice">
  <strong>Fast Download</strong> depends on your net speed. If due to extra visitors one click <strong>GDrive-1, 2, 3</strong> is not downloading then download using other <strong>2 options</strong> <strong>GDTOT</strong> and <strong>FilePress</strong> given below. If all links are not working due to technical issues then request re-upload. Before <strong>requesting</strong> please check the pin post of Telegram channel.
</div>

<div class="notice" style="border-left-color: red; border-color: red;">
  ⚠️ এই পেজের কোন লিংক সেভ রাখবেন না। কারণ লিংকগুলো এক ঘন্টা পর অটোমেটিক পরিবর্তন হয়ে যায়।
</div>

<footer>
  &copy; 2025 Movie Flix. All rights reserved.
</footer>

</body>
</html>
`.trim();

  document.getElementById('output').value = html;
});

document.getElementById('copyBtn').addEventListener('click', function () {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  this.textContent = 'Copied!';
  setTimeout(() => {
    this.textContent = 'Copy';
  }, 2000);
});
