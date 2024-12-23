import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    // console.log(data)
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto mt-10  flex items-start justify-start gap-5 w-full py-5'>

{
   data.tasks.map((elem, index) => {
    if (elem.active) {
        return <AcceptTask key={index} task={elem} />
    } else if (elem.newTask) {
        return <NewTask key={index} task={elem} />
    } else if (elem.completed) {
        return <CompleteTask key={index} task={elem} />
    } else if (elem.failed) {
        return <FailedTask key={index} task={elem} />
    }
    return null; // Default case if no condition matches
})
}

    </div>
  )
}

export default TaskList
