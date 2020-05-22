<template>
  <div :class="$style.home">
    <HomeMainHeader />

    <div class="tw-container tw-mx-auto" :class="$style.homeContainer">
      <ul :class="$style.grid">
        <HomeCard :span="2" overflow background-color="#F0F0F0">
          <HomeCardMedia src="/img/new_snax_art@2x.jpg" absolute />

          <HomeCardBody lighten>
            <HomeCardSubtitle>안녕, 세상</HomeCardSubtitle>
            <HomeCardTitle>SNΛX STORE 리뉴얼</HomeCardTitle>
          </HomeCardBody>

          <AppSpacer />

          <HomeCardBody lighten
            >새롭게 리뉴얼된 SNΛX STORE를 만나보세요.</HomeCardBody
          >
        </HomeCard>

        <HomeCard overflow href="https://calvinsnax.com/" target="_blank">
          <HomeCardMedia src="/img/old_snax@2x.jpg" />
          <HomeCardBody>
            <div class="tw-flex tw-items-center">
              <div class="tw-flex-1 tw-pr-2">
                <HomeCardTitle size="small">구버전 사이트로 이동</HomeCardTitle>
                <HomeCardDesc
                  >equeer, EDEN, Hios, C!rculator 구매자는 구버전 사이트를
                  이용하세요.</HomeCardDesc
                >
              </div>

              <AppButton size="small" color="gray-blue" rounded>이동</AppButton>
            </div>
          </HomeCardBody>
        </HomeCard>

        <HomeCard overflow :to="{ name: 'product', params: { id: 'equeer' } }">
          <HomeCardMedia src="/img/thumb_equeer.jpg" />
          <HomeCardBody dense>
            <HomeProductItem
              item-id="equeer"
              src="/img/thumb_equeer.jpg"
              title="이퀴어 테마 패키지"
              desc="커뮤니티 사이트를 위한 최적의 솔루션"
              :price="40000"
              none-padding
            />
          </HomeCardBody>
        </HomeCard>

        <HomeCard
          overflow
          :span="2"
          :to="{ name: 'product', params: { id: 'eden' } }"
        >
          <HomeCardMedia src="/img/thumb_eden.jpg" absolute />

          <HomeCardBody expand lighten>
            <HomeCardSubtitle>EDEN BOARD SKIN</HomeCardSubtitle>
            <HomeCardTitle>에덴 게시판 스킨 30% 할인</HomeCardTitle>

            <AppSpacer />

            <HomeCardDesc>기본기를 갖춘 가벼운 게시판 스킨.</HomeCardDesc>
          </HomeCardBody>
        </HomeCard>

        <HomeCard
          overflow
          :span="2"
          :to="{ name: 'product', params: { id: 'circulator' } }"
        >
          <HomeCardMedia src="/img/thumb_circulator-2.png" />
          <HomeCardBody
            style="background: linear-gradient(to right, rgb(21, 148, 255) 10%, rgb(167, 211, 247) 62%, rgb(191, 216, 243) 84%)"
            lighten
          >
            <HomeCardSubtitle>C!irculator 알림센터 스킨</HomeCardSubtitle>
            <HomeCardTitle>센스있는 알림 디자인</HomeCardTitle>
            <HomeCardDesc>멋지게 메시지를 전달하는 방법. </HomeCardDesc>
          </HomeCardBody>
        </HomeCard>

        <HomeCard>
          <HomeCardBody expand>
            <HomeCardSubtitle>추천 제품</HomeCardSubtitle>
            <HomeCardTitle>커뮤니티를 위한 완벽한 구성</HomeCardTitle>

            <AppSpacer />

            <HomeProductItem
              item-id="equeer"
              src="/img/thumb_equeer.jpg"
              title="이퀴어 테마 패키지"
              desc="커뮤니티 사이트를 위한 최적의 솔루션"
              :price="40000"
            />
            <HomeProductItem
              item-id="eden"
              src="/img/thumb_eden.jpg"
              title="EDEN 게시판 스킨"
              desc="기본기를 갖춘 가벼운 게시판 스킨"
              :price="40000"
            />
            <HomeProductItem
              item-id="hios"
              src="/img/thumb_hios.jpg"
              title="Hios 회원모듈 스킨 세트"
              desc="회원 페이지를 새롭게"
              :price="40000"
            />
            <HomeProductItem
              item-id="circulatorr"
              src="/img/thumb_circulator.jpg"
              title="C!irculator 알림센터 스킨"
              desc="센스있는 알림 디자인"
              :price="40000"
            />
          </HomeCardBody>
        </HomeCard>
      </ul>
    </div>
  </div>
</template>

<script>
import HomeMainHeader from '@/components/home/HomeMainHeader'
import HomeCard from '@/components/home/HomeCard'
import HomeCardBody from '@/components/home/HomeCardBody'
import HomeCardTitle from '@/components/home/HomeCardTitle'
import HomeCardSubtitle from '@/components/home/HomeCardSubtitle'
import HomeCardDesc from '@/components/home/HomeCardDesc'
import HomeCardMedia from '@/components/home/HomeCardMedia'
import HomeProductItem from '@/components/home/HomeProductItem'

export default {
  components: {
    HomeMainHeader,
    HomeCard,
    HomeCardBody,
    HomeCardTitle,
    HomeCardSubtitle,
    HomeCardDesc,
    HomeCardMedia,
    HomeProductItem,
  },

  data() {
    return {
      test: 'hello',
    }
  },
}
</script>

<style lang="scss" module scoped>
.home {
  .homeContainer {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media (max-width: $large-w) {
    grid-template-columns: repeat(1, 1fr);
  }

  & > li {
    min-width: 0;

    @media (max-width: $medium-w) {
      grid-column: auto !important;
    }
  }
}
</style>
