import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom '
import { useSelector } from 'react-redux'

function Dashboard() {
  const navigate = useNavigate()
  const { user } = useSelector(() => StaticRange.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])
}

export default Dashboard
