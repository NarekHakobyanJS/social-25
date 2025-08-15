import { useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { getAllUsers } from "../../store/slices/usersSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import UsersCards from "../../components/feature/UsersCards/UsersCards"
import UserPagination from "../../components/ui/Pagination/UserPagination"

const UsersPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {page, totalPageCount} = useAppSelector((state) => state.usersPage)


    const addParam = () => {
      // Ավելացնում ենք կամ փոխում ենք parameter-ը
      searchParams.set("page", page.toString());
      searchParams.set("count", totalPageCount.toString());
  
      // Թարմացնում ենք URL-ը
      setSearchParams(searchParams);
    };

    const disaptch = useAppDispatch()
    useEffect(() => {
        disaptch(getAllUsers({page, totalPageCount}))
        addParam()
    }, [page])

  return (
    <>
      <UserPagination />
      <UsersCards />
    </>
  )
}

export default UsersPage