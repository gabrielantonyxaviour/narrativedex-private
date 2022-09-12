const ChooseFile = ({ onChange }) => {
  return (
    <input
      className="pr-1 text-sm text-gray-700 bg-white rounded-xl border border-gray-300 shadow-sm cursor-pointer dark:text-white dark:bg-gray-800 focus:outline-none dark:border-gray-700/80 focus:border-brand-400"
      type="file"
      accept="image/*"
      onChange={onChange}
    />
  )
}

export default ChooseFile
