const internalIp = require('internal-ip')
const publicIp = require('public-ip')

const template = (getValue, name) => Promise.resolve(getValue()).then(value => ({
  icon: 'fa-globe',
  title: `${name}: ${value}`,
  subtitle: '(Select to copy to the clipboard)',
  value
}))

const ipTypes = [
  {
    test: query => /internal ipv4/i.test(query),
    getValue: () => template(internalIp.v4, 'Internal IP')
  },
  {
    test: query => /internal ipv6/i.test(query),
    getValue: () => template(internalIp.v6, 'Internal IPv6')
  },
  {
    test: query => /public ipv4/i.test(query),
    getValue: () => template(publicIp.v4, 'Public IP')
  },
  {
    test: query => /public ipv6/i.test(query),
    getValue: () => template(publicIp.v6, 'Public IPv6')
  }
]

const defaultOrder = [
  'internal ipv4',
  'public ipv4'
]

const getTemplateFromName = ipTypeName => ipTypes.find(ipType => ipType.test(ipTypeName))

module.exports = () => (query, env = {}) => {
  const order = Array.isArray(env.order) ? env.order : defaultOrder
  const ipEntries = order.map(getTemplateFromName)
  return Promise.all(ipEntries.map(ipEntry => ipEntry.getValue()))
}
