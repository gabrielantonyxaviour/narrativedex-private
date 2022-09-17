import { Modal } from '@components/UI/Modal'
import { Tooltip } from '@components/UI/Tooltip'
import GetModuleIcon from '@components/utils/GetModuleIcon'
import { CashIcon } from '@heroicons/react/outline'
import { getModule } from '@lib/getModule'
import { motion } from 'framer-motion'
import { useState } from 'react'

import Modules from './Modules'

const SelectCollectModule = ({
  feeData,
  setFeeData,
  setSelectedModule,
  selectedModule
}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Tooltip
        placement="top"
        content={getModule(selectedModule.moduleName).name}
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => {
            setShowModal(!showModal)
          }}
          aria-label="Choose Collect Module"
        >
          <div className="text-brand">
            <GetModuleIcon module={selectedModule.moduleName} size={5} />
          </div>
        </motion.button>
      </Tooltip>
      <Modal
        title="Select collect module"
        icon={<CashIcon className="w-5 h-5 text-brand" />}
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <Modules
          feeData={feeData}
          setFeeData={setFeeData}
          selectedModule={selectedModule}
          setSelectedModule={setSelectedModule}
          setShowModal={setShowModal}
        />
      </Modal>
    </>
  )
}

export default SelectCollectModule
