import { Button } from '@components/UI/Button'
import { gql, useQuery } from '@apollo/client'
import { CommentFields } from '@gql/CommentFields'
import { MirrorFields } from '@gql/MirrorFields'
import { PostFields } from '@gql/PostFields'
import { useInView } from 'react-cool-inview'
import { useAppPersistStore } from 'src/store/app'
import { useState } from 'react'
import { ErrorMessage } from '@components/UI/ErrorMessage'
import { Card } from '@components/UI/Card'
import Logger from '@lib/logger'
const HOME_FEED_QUERY = gql`
  query HomeFeed(
    $request: TimelineRequest!
    $reactionRequest: ReactionFieldResolverRequest
    $profileId: ProfileId
  ) {
    timeline(request: $request) {
      items {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        next
        totalCount
      }
    }
  }
  ${PostFields}
  ${MirrorFields}
  ${CommentFields}
`

const Home = () => {
  const { currentUser } = useAppPersistStore()
  const [publications, setPublications] = useState([])
  const [pageInfo, setPageInfo] = useState()
  const handlefetch = () => {
    publications?.map((post, index) => console.log(post))
  }

  const { data, loading, error, fetchMore } = useQuery(HOME_FEED_QUERY, {
    variables: {
      request: { profileId: currentUser?.id, limit: 10, sources: ['lenster'] },

      reactionRequest: currentUser ? { profileId: currentUser?.id } : null,
      profileId: currentUser?.id ?? null
    },
    fetchPolicy: 'no-cache',
    onCompleted(data) {
      setPageInfo(data?.timeline?.pageInfo)
      setPublications(data?.timeline?.items)
      Logger.log('[Query]', `Fetched first 10 timeline publications`)
    }
  })

  const { observe } = useInView({
    onEnter: async () => {
      const { data } = await fetchMore({
        variables: {
          request: {
            profileId: currentUser?.id,
            cursor: pageInfo?.next,
            limit: 10
          },
          reactionRequest: currentUser ? { profileId: currentUser?.id } : null,
          profileId: currentUser?.id ?? null
        }
      })
      setPageInfo(data?.timeline?.pageInfo)
      setPublications([...publications, ...data?.timeline?.items])
      Logger.log(
        '[Query]',
        `Fetched next 10 timeline publications Next:${pageInfo?.next}`
      )
    }
  })

  return (
    <>
      <p>HI</p>
      <Button
        size="lg"
        disabled={false}
        icon={
          <img
            className="mr-1 w-5 h-5"
            height={20}
            width={20}
            src="https://cdn-icons-png.flaticon.com/512/223/223203.png"
            alt="Lens Logo"
          />
        }
        onClick={handlefetch}
      >
        Fetch Posts
      </Button>
    </>
  )
}

export default Home
