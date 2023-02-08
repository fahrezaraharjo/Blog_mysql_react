import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Menu } from '../components';


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <div className="info">
            <span>jhon</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="editdelete">
            <Link to={`/write?edit=2`} className="link">
              <div className="edit">
                <AiFillEdit color='green' />
              </div>
            </Link>
            <Link className='link'>
              <div className="delete">
                <AiFillDelete color='red' />
              </div>
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos aperiam illum aliquid consectetur omnis nobis ad asperiores, doloribus placeat recusandae ullam dolore sed hic autem sit est illo modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, officia nisi. Tempora ea temporibus excepturi aperiam quibusdam id non cum quam inventore, illum facere corporis harum totam facilis et illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempora magnam explicabo obcaecati blanditiis alias, corporis perferendis, nisi architecto amet sapiente repudiandae eaque voluptatibus? Autem pariatur corrupti saepe deleniti praesentium!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum amet quisquam excepturi ducimus aliquam, minima officiis quas inventore. Aspernatur quasi ducimus est deserunt cumque odio beatae assumenda quo placeat?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nulla, error voluptate possimus, culpa dolorem ipsam iusto hic aperiam nemo consequuntur quaerat officiis quo aut dicta laborum corporis nobis? Laborum.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single