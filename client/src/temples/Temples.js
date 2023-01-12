import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTemples} from '../actions/temple';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TempleItem from './TempleItem';

const Temples = ({getTemples, temple: {temples, loading}}) => {
  useEffect(() => {
    getTemples();
  }, [getTemples]);

  const [searchTerm, setSearchTerm] = useState('');

  const [visibleTemples, setvisibleTemples] = useState(12);
  const handleClick = () => {
    setvisibleTemples(previousvisibletemples => previousvisibletemples + 12)
  }

  return (
    <div>
    <Header />
    <Navbar />
    <div className="Temples1">
      <h1 className="Temples-heading">Temples</h1>
      <input className="Searchbar" placeholder="Search....." onChange={event => {setSearchTerm(event.target.value)}}></input>
      {// eslint-disable-next-line
        temples.filter((temple) => {
        if(
          temple.temple_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.deity.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.perumal.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.thayar.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.temple_category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.built_by.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.built_in.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.saints_associated.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.architecture_style.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.address.toLowerCase().includes(searchTerm.toLowerCase())
        )
        {return temple}
      }).map((temple) => (
        <TempleItem key={temple._id} temple={temple}/>
      )).slice(0, visibleTemples)
     }
    <button className="load-more-button" type="button" onClick={handleClick}>Load More Temples</button>
    </div>
    <Footer />
    </div>
  );
}

Temples.propTypes = {
  getTemples: PropTypes.func.isRequired,
  temple: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  temple: state.temple
});

export default connect(
  mapStateToProps,
  {getTemples}
)(Temples);
