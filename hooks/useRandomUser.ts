import { useEffect, useState } from "react"
import team from "@/utils/Team"
type Name = {
  title: string
  first: string
  last: string
}

type Picture = {
  large: string
  medium: string
  thumbnail: string
}

export type user = {
  name: Name
  email: string
  phone: string
  cell: string
  picture: Picture
  position: string
  description: string
}

const LIST_LOCAL_STORAGE_USER = "LIST_USER"

const useRandomUser = () => {
  const [users, setUsers] = useState<user[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)

        let result: user[]

        const storeUserList = localStorage.getItem(LIST_LOCAL_STORAGE_USER)
        if (storeUserList && storeUserList.length > 0) {
          const parsedData: user[] = JSON.parse(storeUserList)
          result = parsedData
        } else {
          const response = await fetch(
            "https://randomuser.me/api/?results=4&exc=login,location,gender,dob,registered,id"
          )

          if (!response.ok) {
            throw new Error("Failed to fetch Pokémon details.")
          }

          const data = (await response.json()) as { results: user[] }
          const firstArr = data.results
          let secondArr: any = []
          for (let i = 0; i < firstArr.length && i < team.length; i++) {
            const mergedObj = { ...firstArr[i], ...team[i] }
            secondArr.push(mergedObj)
          }
          result = secondArr
          localStorage.setItem(LIST_LOCAL_STORAGE_USER, JSON.stringify(result))
        }

        setUsers(result)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { users, loading, error }
}

export default useRandomUser
