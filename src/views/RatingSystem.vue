<template>
  <div class="max-w-3xl mx-auto px-4 py-10 text-primary-dark dark:text-ternary-light rtf">
    <!-- Presentation paragraph -->
    <h1 class="text-3xl font-bold article-title-font mb-4 text-center">ملاحظاتٌ بخصوص التّقديراتِ الشخصيّةِ</h1>
    <p class="mb-10 leading-loose text-xl sm:text-2xl text-justify base-font">
      ليست التقديرات الشخصية عملاً تقييميّا حقيقيا، وإنما هي مؤشّرات رقميّة تسهّل على المستخدم التعامل مع قاعدة القراءات والمقالات النقدية.
      وإني على بيّنةٍ من أثرها الاختزاليِّ على القراءة النقدية التي تبحث في فهم العمل الفنيِّ وتُجلي عن مناقبه ومثالبه.
      ولكن، من قال إنّ المرء لا يحتاج أحيانا إلى الاختزال؟
    </p>

    <!-- Ratings explanation -->
    <div class="space-y-6">
      <div
              v-for="(description, index) in ratingDescriptions"
              :key="index"
              class="flex flex-col sm:flex-row items-center gap-4 bg-secondary-light dark:bg-ternary-dark p-4 rounded-xl shadow-sm"
      >
        <StarRating :rating="description.value" class="text-xl sm:text-2xl" />
        <p class="base-font text-xl sm:text-2xl text-center sm:text-right sm:flex-1">{{ description.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import StarRating from "@/components/reusable/StarRating.vue";

export default {
  name: "AboutUs",
  components: {StarRating},

  data() {
    return {
      ratingDescriptions: [
        { value: 0.5, text: "ملفّ فسادٍ على الأغلب." },
        { value: 1, text: "عملٌ كسولٌ يحتقرُ صاحبُه جمهورَهُ" },
        { value: 1.5, text: "عملٌ فقيرٌ، أخطاؤه فادحةٌ ولا تسمحُ بالتعامل معه بجديّةٍ." },
        { value: 2, text: "يغلبُ الضعفُ  والأخطاءُ على الجهدِ والمحاولة." },
        { value: 2.5, text: "عملٌ متوسّط جدا. يملك حدّا مقبولا من الإتقان ولكنّه يفتقر للطرافة. فكأنّك شاهدت مثله مرارا من قبل." },
        { value: 3, text: "عملٌ طريفٌ وجيّدٌ، يصلح للمشاهدة." },
        { value: 3.5, text: "عملٌ طريفٌ ومتقنٌ جدا، وله مكان غالبا في قوائم الأعمال الأفضل للسنة." },
        { value: 4, text: "تحفة فنيّة مهمّة لها وقعها الذي لا يخفت. يمكنها أن تصبح فلمًا كلاسيكيّا." },
        { value: 4.5, text: "أيقونة بارزة لا ينبغي على الإنسان أن يعيش ويموت دون أن يشاهدها." },
        { value: 5, text: "عمل كامل الأوصاف، يأتي العقلَ فيخلّصه من الجفاف، ويبعث في العقل نورا، واختلاجا في الأطراف." },
      ],
    };
  },
};
</script>
