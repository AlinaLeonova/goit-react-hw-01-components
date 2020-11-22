import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendItem.module.css'

const FriendItem = ({ arr }) => (
  <li className={style.item}>
    <span className={arr.isOnline ? style.statusIsGreen : style.statusIsRed}>{arr.isOnline}</span>
    <img className={style.avatar} src={arr.avatar} alt="" width="48" />
    <p className={style.name}>{arr.name}</p>
  </li>
)

FriendItem.propTypes = {
  arr: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default FriendItem