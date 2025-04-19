<template>
  <div class="container mx-auto">
    <section class="flex flex-col sm:justify-center items-center sm:flex-row mt-12 sm:mt-10">
    <!-- Banner right illustration -->
      <div class="w-full md:w-2/5 text-right hidden sm:block sm:mr-20">
        <img
                v-if="theme === 'light'"
                src="@/assets/images/bluenotebook.png"
                alt="Developer"
        />
        <img
                v-else
                src="@/assets/images/bluenotebook-darktheme.png"
                alt="Developer"
        />
      </div>

      <!-- Banner left contents -->
      <div class="w-full mt-4 md:w-2/5 text-left">
        <h1 class="daftar-title text-5xl md:text-8xl xl:text-8xl text-center sm:text-right whitespace-nowrap text-ternary-dark dark:text-primary-light uppercase">
          الـدّفتـــر الأزرق
        </h1>
        <p class="base-font mt-6 sm:mt-8 text-lg sm:text-xl xl:text-2xl text-center sm:text-right leading-none text-gray-400">
          صدرت صفحة الدفتر الأزرق سنة 2021، بعد أكثر من عشر سنوات من الكتابة في السينما وفي الأعمال السينمائيّةِ.
          وكان الغرضُ منها، المساهمة في إثراء المدوّنة النقديّةِ العربيّةِ بمحاولاتٍ جادّةٍ لفهمِ جماليّات الأعمال الفنيّة العالميّةِ والعربيّةِ استئناسا بالنظريات  النقديّة.
          ولم تقتصر الصفحة على المقالات النقديّة الطويلة، وإنّما نشرت مراجعات قصيرة ومقترحاتٍ متنوّعةً لم تلبث أن غلبت عليها لما فرضه فيسبوك من أشكال النشر الممتنعة عن النّصوص الطويلةِ.
          جاء موقع الدفتر الأزرق لجمع كلّ الكتابات السينمائيّة سواء الّتي نُشِرت على صفحة الفيسبوك أو الّتي نُشرت من قبلُ في الصّحافة، وفي النشريّات السينمائيّةِ، وفي المدوّنة الشخصيّةِ وحتّى في المجموعات الفيسبوكيّة الّتي تُعنى بالسينما...
          وجاءَ لتوفير أشكالِ عرضٍ أكثر ملاءمةً لقراءةِ المقالاتِ والنصوص عامّةً بمختلفِ أغراضِها. الهدفُ أن تكون النّصوصُ تفاعليّةً، تشرح ما ينبغي شرحه من مصطلحاتٍ ومفاهيم، وتخفي ما يجب إخفاؤُه من حرقٍ، وتحيلُ إلى ما يستحسنُ الإحالةُ إليهِ من مراجع ونصوصٍ أخرى...
          ولئن كان الهدفُ قريب المنالِ، فلا ضير من البدءِ بهذه النسخة التي تسمح بقراءةٍ مريحةٍ للنصوصِ، وخدمةِ بحثٍ في خاصيّاتِ الفلمِ الأساسيّةِ. والله وليّ التوفيق.
        </p>
        <p class="base-font text-center sm:text-left text-lg sm:text-xl xl:text-2xl text-gray-400 mt-4 sm:mt-0 ">
          فاروق الفرشيشي
        </p>
      </div>
  </section>
  </div>
</template>
<script>

import {defineComponent} from "vue";
import feather from "feather-icons";
export default defineComponent({
  data: () => {
    return {
      theme: '',
    };
  },
  created() {
    this.theme = localStorage.getItem('theme') || 'light';
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem('theme') || 'light';
  },
  updated() {
    feather.replace();
  },
  methods: {},
})
</script>