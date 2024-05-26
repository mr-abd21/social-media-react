import React from 'react'
import './rightBar.scss';

export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For you</span>
          <div className="user">
            <div className="userInfo">
               <img src="data:image/png;base64,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" alt="" />
               <span>Abdul Mohiz</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAACyCAMAAABFl5uBAAAAYFBMVEXEzN/////g5O7///3Dzd/Ayd73+Pq/yt7//v/Dy+Ds7vTByd/BzN7T2efI0OLx9PfZ3+rK0eDT2ubg5O/j6O/b4urN1OXDzty+xdjv8ffp7PT19vrAy+LX3OrV3ObM1uQIwQ/DAAAGHUlEQVR4nO2d63qjIBBAMQzieNeY9JKmff+3XIi9pEnsBkExI2e//dvq6QAOl4GxQCAQCAQCgcBMAPh+gmXSa0GUMgj6BTLM1P+y2O12H+j7aRaElKKpuyqOPnkPcjSIQpZ1+q0l4jxKWXDDULB2Vykf0Q88qoXv5/KKGo5QiH1XRde061aDqt9tVDvinF+p2YtVj1J51nRKjP537SZ7WnFng7K91ZS+eM59P6A3BNTJ7873gpcm8/2MXgAUddwPRkOodrZdZWcs9/EfEfNNVeLa+mPE178a01ns8Fb6fth5kW3Mk1sj03WziqJOrCl0ZHdPyPy0q2Y9oQPpfe3pO3biZg2DuUoQAOL/+/jdrHhUCEa+XakXhIORmk8/6+iRR6jRvfaGvpwsHaGmjxzqn4HZbpwaHTnNm++nnxRsRqrRUxi8oZyVPwmzIeqCGAgPVvhuo4ZHHeG03C5sFIQ/kAtLNVFFdqwSI8fvMwqy3bG1Gp4SbVR6ADfJMW+5iXy/xFS0DtwQ/cbBrZ2Yk5vC91tMA27s1QQ3wc0IkuDmD2rfbzENTtxswji1OjchbgYAcJBOEXXDmAxuBgluhgluhgluhgluhgluBkH5EtzcBpi0XWUg7MZ6BSa4CW6CmzOCm2GCm2GCm2GCm2GCm2GCm2GCm2GCm2GAZU7cUNy9D7mTXHP7RjBwmm3txI2ktzspdyFGUVXps+93cU3uRo2G3HaB4GYYJx0xTTfgZCK9p/T9Mq5xshiu4ZxcX+zQDbW96Wh4tHdVbnIXm2+i06Ffam4YO+qdjC4geN7D+gzMFyk9N43tfv0vOnoJleBO5HBe0JulEG7Chkd7em4ysyIUw25KeudZ7c6x/lBl9NxA6aZRdRSL4bjJNvmeoJrTKG4fOhSblKa27o3VKOX7JSbCPhfnNb0BvAdbWzcV3aILH7ZhQ3Llrsd6ZfODZkesEbYTXHTDhuVHOzUHein4F8BKOzckN1H0AMvs3LS+32A6AISVmoRwd2P59Ue2wEuP3UQF2Y/intImpSJcpU0j0/FuUtphw9BiKYbmzM0Z4jC2eBLBNbsL8GPkDBentu3mmrGVF/iBfNgwvSvSOHD0hSgl8Z74BDbGbUqXdqa4vHCNPJp3xwQ3CNxGHI0jh3CWeYE0VUO15OEtjN2Ua3GDplNcapRaixvjPVwrcoOm08ZrcrMzHsNX40aYb1NakRvTrIH7fuTZME83ye1FH0TEpm1qRW5Mw2Y9bkasUq3FDcA+uLkJMJDG8+mcS0b/HnGAHDPjBTweiZz44hTTN9U27/Vf1xsPyOl2vp98evL92ENUse9Hn567LvG9FTlRR73DKcYevlNZBvEOR3QWewUIHoA5A6zKrZJe2FQDuM0m2mNOOHBgxALDGQQPav4Adod9E9/PPy2V1UGYmnDgoHmS+QuCFQW+GTFP/BuytySC3UZIzQvZwMntz91RzcbFk31ZqVoQ7I5ltndSACeumcyRUvRIrA8uDvmefsZL8ZwjkU4ZRR8ybo7OJ+rnJNtGENj9h0KOmOb7Py91/uB2UJRd4qruzTlcn2stxQMnn6JIdRcxhZtTMZ20FQ/Y7wCwLHdSd/Zv4g0Tj7a5VqrG9PnHnZrXj+yRgkeNTNVEjemC0++oavYYuYRqTOx9+sZ0oahrUC6+aeEb28SnAwgzqkkSFTxttuhaFQBZo7cd8cjVl9599L8rPi53zRxysXdXiHeUoU2ZLTPVEsUUH8D3k+iBMW0WNWrpPxRI0R76c07e3Hz+ZtXxLGoeI89q4y1801Ed5WJyLWTHuQftQU6Ry+PtInplWFbM9PAo2aD/2MnaxZnp4RvMnjyKQVHo1rRENzqb6NBXLgG53Lu4hXZCYk8tC5C9ehyx74TXHqaWQdTc6+fMffAoLmb/3AE35YjnoJu3XYli3kzbBj5rcRgU/aTeo9iJ5rqySqVPmas7OuaBz7jJQHaPEzFfdPPIEbXvFzWGz7TJ1KYqlD94NIebPHm4BnVihkooD9YPf6L/nJPfeQHW+9K8MXnN7Hzn6qqk2eET14mBN7/z5RZMf8jI0Y03PuCxmHSBBp8f1g3XxVDM3PwDu7JXBcBoqfoAAAAASUVORK5CYII=" alt="" />
               <span>Maaz Ali</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          
        </div>

        <div className="item">
            <span>Latest Activities</span>
            <div className="user">
            <div className="userInfo">
               <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               <p>
               <span>M Ahmad</span> changed their cover photo
               </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
               <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               <p>
               <span>Ali Zarar</span> liked your photo
               </p>
            </div>
            <span>5 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
               <img src="data:image/png;base64,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" alt="" />
               <p>
               <span>Maaz Ali</span> sent a friend request
               </p>
            </div>
            <span>2 hours ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
               <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
               <p>
               <span>Arsal Jadoon</span> sent a voice note
               </p>
            </div>
            <span>5 secs ago</span>
          </div>

        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
               <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               <div className='online' />
               <span>Ali Zarar</span>               
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
               <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
               <div className='online' />
               <span>Arsal Jadoon</span>
               
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
               <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               <div className='online' />
               <span>M Ahmad</span>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
