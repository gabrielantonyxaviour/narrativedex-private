const getAttribute = (attributes, query) => {
  return attributes?.find((o) => o.key === query)?.value
}

export default getAttribute
