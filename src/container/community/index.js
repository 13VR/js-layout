import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', "Ком'юніті")

page.append(title)

// const tab = createElement('div', 'tab')

// page.append(tab)

const TAB_BUTTONS = [
  { text: 'База знань', viewed: true },
  { text: 'Інформація', viewed: false },
]
const creatTab = () => {
  const tab = createElement('div', 'tab')

  TAB_BUTTONS.forEach((data) => {
    const tabButtons = createElement(
      'div',
      data.viewed
        ? 'tab__buttons info--viewed'
        : 'tab__buttons',
    )
    const spanButton = createElement(
      'span',
      'tab__text',
      data.text,
    )
    tabButtons.append(spanButton)
    tab.append(tabButtons)
  })
  return tab
}

const tab = creatTab()
page.append(tab)

const IMG = [{ src: '/svg/community.svg' }]
const COMMUNITY = [
  {
    title: 'Що таке база знань?',
    text: `База знань - база даних, що
  містить правила виведення та інформацію про людський
  досвід і знання в деякій предметній галузі. У
  системах, що самонавчаються, база знань також
  містить інформацію, що є результатом вирішення
  попередніх завдань.`,
  },
]

const createCommunity = () => {
  const community = createElement('main', 'community__list')

  IMG.forEach((data) => {
    const img = createElement('img')
    Object.entries(data).forEach(([key, value]) => {
      img[key] = value
    })
    img.append(data.src)
    community.append(img)
  })

  COMMUNITY.forEach((data) => {
    const creatContent = createElement(
      'div',
      'community__content',
    )
    const contentTitle = createElement(
      'h2',
      'community__title',
      data.title,
    )
    const contentText = createElement(
      'p',
      'community__text',
      data.text,
    )
    const button = createElement(
      'button',
      'community__button',
      `Перейти до ком'юніті в
      Телеграм`,
    )
    community.append(creatContent)
    creatContent.append(contentTitle, contentText)
    community.append(button)
  })
  return community
}

const community = createCommunity()
page.append(community)
