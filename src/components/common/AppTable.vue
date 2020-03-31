<template>
  <div class="app-table-wrap">
    <table
      class="app-table"
      :class="{
        'app-table-left': left,
        'app-table-thead-dense': theadDense,
        'app-table-tbody-dense': tbodyDense,
      }"
    >
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  props: {
    left: [Boolean, String],
    theadDense: [Boolean, String],
    tbodyDense: [Boolean, String],
  },
}
</script>

<style lang="scss">
.app-table-wrap {
  @media (max-width: $large-w) {
    overflow-x: auto;
  }
}

.app-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: $large-w) {
    width: $x-large-w;
  }

  & > thead,
  & > tbody {
    & > tr {
      & > th,
      & > td {
        padding: 28px 22px;
        text-align: center;
        border: 1px solid $color-border-lighter;
        transition: 250ms;

        &:first-child {
          border-left: none;
        }
        &:last-child {
          border-right: none;
        }
      }
      & > th {
        font-weight: $font-weight-medium;
      }
    }

    & > tr {
      &:hover > td {
        background-color: $color-button-default-hover;
      }
      // &:last-child {
      //   & > td {
      //     border-bottom: none;
      //   }
      // }
    }
  }

  & > thead > tr > th {
    font-size: 14px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &.app-table-left {
    & > thead,
    & > tbody {
      & > tr > th,
      & > tr > td {
        text-align: left;
      }
    }
  }

  &.app-table-thead-dense {
    & > thead {
      & > tr > th {
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
  }

  &.app-table-tbody-dense {
    & > tbody {
      & > tr > td {
        padding-top: 16px;
        padding-bottom: 16px;
      }
    }
  }
}
</style>
