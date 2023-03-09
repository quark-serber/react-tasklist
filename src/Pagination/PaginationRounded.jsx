import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TaskList from "../TaskList/TaskList";

function PaginationRounded(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return props.data.slice(begin, end);
    }

    return (
        <Stack spacing={2} >
            <Pagination count={itemsPerPage} shape="rounded" onChange={(e, value) => setCurrentPage(value)}/>
            <TaskList data={currentData()}/>
        </Stack>
    );
}

export default PaginationRounded;