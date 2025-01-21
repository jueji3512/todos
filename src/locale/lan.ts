// 导入所有模块的语言包
const moduleLanguages = import.meta.glob('./modules/**/*(zh-CN|en-US).ts', { eager: true })

// 处理模块语言包
const processModuleLanguages = () => {
  const result = {
    'zh-CN': {},
    'en-US': {}
  }
  Object.entries(moduleLanguages).forEach(([path, module]) => {
    const lang = path.includes('zh-CN') ? 'zh-CN' : 'en-US'
    result[lang] = { ...result[lang], ...(module as any).default }
  })
  return result
}

const moduleTranslations = processModuleLanguages()

const lan = {
  'zh-CN': { ...moduleTranslations['zh-CN'] },
  'en-US': { ...moduleTranslations['en-US'] },
}

export default lan
