import SEO from './utils/SEO'

const Loading = () => {
  return (
    <div className="flex flex-grow justify-center items-center h-screen">
      <SEO />
      <img
        className="w-28 h-28"
        height={112}
        width={112}
        src="/logo.svg"
        alt="Logo"
      />
    </div>
  )
}

export default Loading
