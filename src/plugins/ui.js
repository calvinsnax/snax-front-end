import Vue from 'vue'
import AppToast from '@/components/common/AppToast/AppToastPlugin'
Vue.use(AppToast)

// global components
// use code splite
Vue.component('AppSpacer', () => import('@/components/common/AppSpacer'))
Vue.component('AppIcon', () => import('@/components/common/AppIcon'))
Vue.component('AppButton', () => import('@/components/common/AppButton'))

// Card
Vue.component('AppCard', () => import('@/components/common/AppCard/AppCard'))
Vue.component('AppCardTitle', () =>
  import('@/components/common/AppCard/AppCardTitle'),
)
Vue.component('AppCardSubtitle', () =>
  import('@/components/common/AppCard/AppCardSubtitle'),
)
Vue.component('AppCardBody', () =>
  import('@/components/common/AppCard/AppCardBody'),
)

Vue.component('AppPagination', () =>
  import('@/components/common/AppPagination'),
)

Vue.component('AppTitle', () => import('@/components/common/AppTitle/AppTitle'))
Vue.component('AppTitleBack', () =>
  import('@/components/common/AppTitle/AppTitleBack'),
)

// Form
Vue.component('AppInput', () => import('@/components/common/AppInput'))

// Select
Vue.component('AppSelect', () =>
  import('@/components/common/AppSelect/AppSelect'),
)
Vue.component('AppOption', () =>
  import('@/components/common/AppSelect/AppOption'),
)

// Radio
Vue.component('AppRadio', () => import('@/components/common/AppRadio/AppRadio'))
Vue.component('AppRadioGroup', () =>
  import('@/components/common/AppRadio/AppRadioGroup'),
)

// AppTab
Vue.component('AppTab', () => import('@/components/common/AppTab/AppTab'))
Vue.component('AppTabItem', () =>
  import('@/components/common/AppTab/AppTabItem'),
)
Vue.component('AppTabContent', () =>
  import('@/components/common/AppTab/AppTabContent'),
)

Vue.component('AppTable', () => import('@/components/common/AppTable'))

Vue.component('AppDatePicker', () =>
  import('@/components/common/AppDatePicker/AppDatePickerContainer'),
)

// Dialog
Vue.component('AppDialog', () =>
  import('@/components/common/AppDialog/AppDialog'),
)
Vue.component('AppDialogTitle', () =>
  import('@/components/common/AppDialog/AppDialogTitle'),
)
Vue.component('AppDialogClose', () =>
  import('@/components/common/AppDialog/AppDialogClose'),
)
Vue.component('AppDialogBody', () =>
  import('@/components/common/AppDialog/AppDialogBody'),
)
Vue.component('AppDialogActions', () =>
  import('@/components/common/AppDialog/AppDialogActions'),
)

// AppHeader
Vue.component('AppHeader', () =>
  import('@/components/common/AppHeader/AppHeader'),
)
Vue.component('AppHeaderTitle', () =>
  import('@/components/common/AppHeader/AppHeaderTitle'),
)
Vue.component('AppHeaderTab', () =>
  import('@/components/common/AppHeader/AppHeaderTab'),
)
Vue.component('AppHeaderTabItem', () =>
  import('@/components/common/AppHeader/AppHeaderTabItem'),
)
Vue.component('AppHeaderIcon', () =>
  import('@/components/common/AppHeader/AppHeaderIcon'),
)
Vue.component('AppHeaderBack', () =>
  import('@/components/common/AppHeader/AppHeaderBack'),
)

// Form
Vue.component('AppForm', () => import('@/components/common/AppForm/AppForm'))
Vue.component('AppFormInput', () =>
  import('@/components/common/AppForm/AppFormInput'),
)
Vue.component('AppFormSubmit', () =>
  import('@/components/common/AppForm/AppFormSubmit'),
)

// Checkbox
Vue.component('AppCheckbox', () =>
  import('@/components/common/AppCheckbox/AppCheckbox'),
)
