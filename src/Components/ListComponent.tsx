import React, { useEffect, useState } from 'react';
import { List, Radio } from "antd";
import type { RadioChangeEvent } from 'antd';

interface todoList {
    completed: boolean,
    title: string,
    userId: number,
    id: number
}

const ListComponent = ({ search }: { search: string}) => {
    const[list, setList] = useState <Array<todoList>>([]);
    const[filterList, setFilterList] = useState <Array<todoList>>([]);
    const[filter, setFilter] = useState<string>('all');

    useEffect(() => {
        if(search.length) {
            fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
            .then(data => {
                setList(data);
                setFilterList(data);
            })
             .catch(err => console.log(err));
        }
    }, [search])

    useEffect(() => {
        if(search.length) {
            if(filter === 'inprogress') {
                setFilterList(list.filter((value : todoList ) => !value.completed))
            } else if(filter === 'completed'){
                setFilterList(list.filter((value : todoList ) => value.completed))
            } else {
                setFilterList(list);
            }
        }
    }, [filter])

    return <div className='table-wrapper'>
          <Radio.Group onChange={(e: RadioChangeEvent) => setFilter(e.target.value)} value={filter}>
            <Radio value={'all'}>All</Radio>
            <Radio value={'inprogress'}>In Progress</Radio>
            <Radio value={'completed'}>Completed</Radio>
          </Radio.Group>
        {filterList.length !== 0 &&  <List
        size="small"
        header={<h3 className='table=heading'>Todo List: ({filterList.length})</h3>}
        bordered
        dataSource={filterList}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />}
      </div>
}

export default ListComponent;