import React, { Fragment, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CreatePin from '../pins/create_pin'

function AddButton() {
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)
  return (
    <Fragment>
      {/* <Link to="/create_pin"> */}
      <IconButton onClick={onOpen} color="primary" aria-label="add to shopping cart" style={{
        position: "fixed",
        bottom: 90,
        right: 50,
        padding: "15px",
        color: "black",
        zIndex: 10000,
      }} sx={{ boxShadow: 3, }}>
        <AddIcon sx={{
          fontSize: 20,
          transform: "scale(2)"

        }}
        />
      </IconButton>

      <CreatePin
        onClose={onClose}
        open={open}
      />

      {/* </Link> */}

    </Fragment>
  )
}

export default AddButton
