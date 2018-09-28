import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import {setTripType} from '../actions/FormActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import QuotationFormSingle from '../components/QuotationFormSingle';
import QuotationFormAnnual from '../components/QuotationFormAnnual';

import '../styles/FormCustom.scss';
import '../styles/common.scss';

class QuotationPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab, e) {
    let target = e.target;

    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }

    this.props.setTripType(target.attributes.value.value);
  }

  render() {
    return (
      <div className="fixed-position">
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({active: this.state.activeTab === '1'})}
              value="Single"
              onClick={e => {
                this.toggle('1', e);
              }}>
              Single
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({active: this.state.activeTab === '2'})}
              value="Annual"
              onClick={e => {
                this.toggle('2', e);
              }}>
              Annual
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="background-white">
          <TabPane tabId="1">
            <QuotationFormSingle />
          </TabPane>
          <TabPane tabId="2">
            <QuotationFormAnnual />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

QuotationPage.propTypes = {
  setTripType: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    setTripType: bindActionCreators(setTripType, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(QuotationPage);