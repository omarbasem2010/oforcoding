function copyTexwt() {
    // تحديد العنصر الذي يحتوي على النص
    var text = document.getElementById('textToCopy').innerText;
    
    // إنشاء عنصر textarea مؤقت لنسخ النص
    var tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    // تحديد النص في العنصر المؤقت
    tempInput.select();
    
    // نسخ النص إلى الحافظة
    document.execCommand('copy');
    
    // إزالة العنصر المؤقت بعد النسخ
    document.body.removeChild(tempInput);
    
    // يمكنك إضافة رسالة تأكيد هنا إذا رغبت
    alert( 'code is copy');
}
