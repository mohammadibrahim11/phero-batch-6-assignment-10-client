import React from 'react';

const Courseitem = ({item}) => {
    const {description,course_name,picture}=item;
    console.log(item);
    return (
        <div>
            <div className='w-50 m-auto border p-4'>
                <div>
                 {course_name}
                </div>
                <div>
                <img src={picture} alt="" srcset="" className='w-100' />
                </div>
                <div>
                   Description :  {description}
                </div>
            </div>
        </div>
    );
};

export default Courseitem;