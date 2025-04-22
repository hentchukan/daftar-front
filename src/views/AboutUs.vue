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
        <p class="base-font mt-6 sm:mt-8 text-lg sm:text-xl xl:text-2xl text-center sm:text-right rtf text-gray-400">
          صدرت صفحة الدفتر الأزرق سنة 2021، بعد أكثر من عشر سنوات من الكتابة عن السّينما
          في الجرائد الإلكترونيّة والنّشريّاتِ الورقيّةِ ومجموعاتٍ مختصّةٍ على مواقعِ التواصلِ
          وغيرها.
          وكان الغرضُ منها،تجاوزُ حدودِ تلكَ الفضاءاتِ، فبعضُها لا يهتمّ بالسّينما كفنّ بل كصناعةٍ ترفيهيّةٍِ،
          فيستثقل الكتابات الطويلةَ، ويحبّذ الحديثَ عن أفلام الميزانيّاتِ الضخمةِ.
          وبعضُها يفرض سياسةً تحريريّةً لا تناسبُ الطابع الأدبيّ لنصوصِ الدّفترِ.
          وبعضُها لا يملك سياسةً تحريريّة من أساسِه، بل لا يقدّم تحريرا من أي شكل.
          فكان الدفتر الأزرق على فايسبوك فضاءً لكتابةٍ حُرّة لا تلتزمُ إلاّ بشغفعها بالسينما.
        </p>
        <p class="base-font mt-6 sm:mt-8 text-lg sm:text-xl xl:text-2xl text-center sm:text-right rtf text-gray-400">
          ولم تقتصر الصفحة على المقالات النقديّة الطويلة، وإنّما نشرت مراجعات قصيرةً ومقترحاتٍ متنوّعةً خفيفةً لم تلبث أن طغت،
          فانحسرت الكتابات الطويلةُ رضوخا لسياسات مواقع التواصل المُغلِّبةِ لمنطق المنشوراتِ البرقيّةِ وثقافة الرّيلز.
          وكان من الضروريِّ البحثُ عن فضاءاتِ نشرٍ أخرى أكثرَ ملاءمةً. يجب أن يلائم الفضاءُ المحتوى لا العكسُ.
        </p>
        <p class="base-font mt-6 sm:mt-8 text-lg sm:text-xl xl:text-2xl text-center sm:text-right rtf text-gray-400">
          جاء موقع الدفتر الأزرق لجمع كلّ الكتابات السينمائيّة في فضاءٍ واحدٍ،
          ولتوفير أشكالِ عرضٍ أكثر ملاءمةً لقراءةِ المقالاتِ النقديّةِ على طولِها، والنصوص عامّةً بمختلفِ أغراضِها.
          ومادام قد وقع الخيار على فضاءٍ الكترونيٍّ مُعدٍّ بالكاملِ للغرضِ، فلتكن الأحلامُ أكبر،
          ولتكن الاستفادةُ من السّلاح الرقميِّ أوسعَ. ولنَرُمْ تقديمَ نصوصٍ تفاعليّةٍ، تشرحُ ما ينبغي شرحُه من مصطلحاتٍ ومفاهيمَ،
          وتُخفي ما ينبغي إخفاؤه من حرقٍ إن شاء القارئُ ذلك، وتترجمُ حين تُطلبُ التّرجمةُ، وتحيلُ إلى المراجعِ بيسرٍ وأناقةٍ،
          وتوفّرُ خدماتٍ أخرى تذكّرُ بمتعةِ القراءةِ في زمن الأعين المغمضةِ في اتّساعٍ...
          ولئن استوجبت هذه الأحلام جهدًا إضافيّا، فلا ضير من البدءِ بهذه النسخة الّتي تسمح
          بقراءةٍ مريحةٍ للنصوصِ بتغيير حجم الخطّ، ولونِ الخلفيّةِ،
          وخدمةِ بحثٍ في خاصيّاتِ الفلمِ الأساسيّةِ كسنتِه (وقد اعتمدنا في ذلك على موقع قاعدة بيانات الأفلام  IMDB)
          ومخرجيه وأسمائه وبلدانه وأغراضه (Genre). إذ يمكنُ دمج بعضها أو كلّها في العمليّةِ البحثيّةِ.
        </p>
        <p class="base-font mt-6 sm:mt-8 text-lg sm:text-xl xl:text-2xl text-center sm:text-right rtf text-gray-400">
          وما هذه إلا نسخةٌ أولى ستتبعُها تطويراتٌ جمّةٌ، وستمنح الدفترَ نفسًا أعمقَ لكتاباتٍ جديدةٍ تجعل من البحث على الموقعِ خاصيّة أشدَّ فائدةً ممّا قد تبدو عليه الآنَ.
          وفي انتظارِ تخصيص فضاءٍ لاستقبالِ المقترحاتِ، فصفحة الدّفتر على الفايسبوك ترحّبُ أيضا بمراسلاتكم. والله وليّ التوفيق.
        </p>
        <p class="base-font text-center sm:text-left text-lg sm:text-xl xl:text-2xl text-gray-400 mt-4 sm:mt-1 ">
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