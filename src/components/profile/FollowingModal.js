import { Avatar, Modal, Stack, Typography, Button, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import Styles from "../../styles/Styles";


function FollowingModal({ username, open, onClose, followingNum, handleFollow, handleUnfollow }) {
  const classes = Styles()
  const { headers, host, authedUser } = useContext(UserContext)

  const [following, setFollowing] = useState([])
  const [authedFollowingIds, setAuthedFollowingIds] = useState([])


  useEffect(() => {
    fetch(`${host}/profile/following?username=${username}`, { headers })
      .then(res => res.json())
      .then(data => {
        setFollowing(data.map(user => ({
          id: user.following[0].id,
          fullName: user.following[0].full_name,
          profilePic: user.following[0].profile_pic,
          username: user.following[0].username,
        })))
      })
  }, [headers, host, username])

  useEffect(() => {
    fetch(
      `${host}/profile/following?username=${authedUser.username}`,
      { headers }
    )
      .then(res => res.json())
      .then(data => (
        setAuthedFollowingIds(data.map(user => (user.following[0].id)))
      ))
  }, [authedUser.username, headers, host, authedUser.following])

  async function handleToFollow(e, id) {
    const status = await handleFollow(e, id)
    if (status === 201) {
      setAuthedFollowingIds(prev => [...prev, id])
    }
  }

  async function handleToUnfollow(e, id) {
    const status = await handleUnfollow(e, id)
    if (status === 200) {
      setAuthedFollowingIds(prev => prev.filter(userId => userId !== id))
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box className={classes.modal}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Following
          </Typography>
        </Box>
        <Stack spacing={2}>
          {following.map(following => (
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing={1} key={following.id}>
                <a className={classes.link} href={`/profile?username=${following.username}`}>
                  <Avatar sx={{ width: 56, height: 56 }} src={following.profilePic} />
                </a>
                <a className={classes.link} href={`/profile?username=${following.username}`}>
                  <Typography fontWeight="bold">{following.fullName}</Typography>
                </a>
              </Stack>

              {following.id !== authedUser.id && (
                authedFollowingIds.includes(following.id)
                  ? <Button onClick={(e) => handleToUnfollow(e, following.id)} variant="text">Unfollow</Button>
                  : <Button onClick={(e) => handleToFollow(e, following.id)} variant="text" color="info">Follow</Button>
              )}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Modal>
  );
}

export default FollowingModal;