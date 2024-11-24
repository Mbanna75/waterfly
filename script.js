// وظيفة لتشغيل الرسوم المتحركة
function playAnimation(animationId) {
  const animationBox = document.getElementById(animationId);

  // رسالة مبدئية
  animationBox.innerHTML = "تشغيل الرسوم...";

  // إضافة حركة بسيطة بعد وقت قصير
  setTimeout(() => {
    animationBox.innerHTML = "🚶‍♂️ الحركة قيد التشغيل...";
  }, 1000);

  // إعادة التعيين بعد 5 ثوانٍ
  setTimeout(() => {
    animationBox.innerHTML = "عرض الحركة هنا";
  }, 5000);
}
