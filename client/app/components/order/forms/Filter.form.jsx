import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import store from 'app/store';
import * as actionCreators from 'app/actions/actionCreators';
import {labels} from '../_data';
import ValidateTools from 'helpers/ValidateTools';
import FormInput from 'utils/components/FormInput';
import { ADMIN_ROLES, FIELD_TYPE } from 'app/constants';
import Tools from 'helpers/Tools';


@connect(
	state => ({
		initialValues: {
			// ...Tools.getInitData(labels.filterForm)
			customer_id: 0,
			dathang_staff: 0,
			customer_staff: 0,
			check_staff: 0,
			confirm_staff: 0
		}
	}), dispatch => ({
		...bindActionCreators(actionCreators, dispatch)
	})
)
@reduxForm({
	form: 'OrderFilterForm', // a unique name for this form
	enableReinitialize: true,
	validate: values => ValidateTools.validateInput(
		values,
		Tools.getRules(labels.filterForm)
	)
})
class FilterForm extends React.Component {
	static propTypes = {
		reducer: PropTypes.string
	};
	static defaultProps = {
		reducer: 'orderReducer'
	};

	constructor(props) {
		super(props);
		this.state = {};
		this._renderForm = this._renderForm.bind(this);
		this._renderAdminPart = this._renderAdminPart.bind(this);
		this._renderUserPart = this._renderUserPart.bind(this);
		this._renderCommonPart = this._renderCommonPart.bind(this);
	}

	componentDidMount(){
	}

	_renderAdminPart(){
		if(!Tools.isAdmin) return null;
		return (
			<div>
				<Field
      				name="customer_id"
      				type="select"
      				options={store.getState()[this.props.reducer].listUser}
      				onInputChange={value => {}}
      				component={FormInput}
      				label={this.props.labels.customer_id}/>
				<div className="row">
					<div className="col-md-3">
						<Field
		      				name="dathang_staff"
		      				type="select"
		      				options={store.getState()[this.props.reducer].listAdmin}
		      				onInputChange={value => {}}
		      				component={FormInput}
		      				label={this.props.labels.dathang_staff}/>

		      			<Field
		      				name="customer_staff"
		      				type="select"
		      				options={store.getState()[this.props.reducer].listAdmin}
		      				onInputChange={value => {}}
		      				component={FormInput}
		      				label={this.props.labels.customer_staff}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="check_staff"
		      				type="select"
		      				options={store.getState()[this.props.reducer].listAdmin}
		      				onInputChange={value => {}}
		      				component={FormInput}
		      				label={this.props.labels.check_staff}/>

		      			<Field
		      				name="confirm_staff"
		      				type="select"
		      				options={store.getState()[this.props.reducer].listAdmin}
		      				onInputChange={value => {}}
		      				component={FormInput}
		      				label={this.props.labels.confirm_staff}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="rate"
		      				type="number"
		      				component={FormInput}
		      				label={this.props.labels.rate}/>
		      			<Field
		      				name="order_fee"
		      				type="float"
		      				component={FormInput}
		      				label={this.props.labels.order_fee}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="delivery_fee"
		      				type="number"
		      				component={FormInput}
		      				label={this.props.labels.delivery_fee}/>
		      			<Field
		      				name="complain_date"
		      				type="date"
		      				component={FormInput}
		      				label={this.props.labels.complain_date}/>
					</div>
	  			</div>
	  			<div className="row">
	  				<div className="col-md-4">
						{/*
						<Field
		      				name="created_at"
		      				type="date"
		      				component={FormInput}
		      				label={this.props.labels.created_at}/>
						*/}
		      			<Field
		      				name="created_at"
		      				type="dateRange"
		      				component={FormInput}
		      				label={this.props.labels.created_at}/>
	  				</div>
	  				<div className="col-md-4">
						<Field
		      				name="updated_at"
		      				type="date"
		      				component={FormInput}
		      				label={this.props.labels.updated_at}/>
	  				</div>
	  				<div className="col-md-4">
						<Field
		      				name="confirm_date"
		      				type="date"
		      				component={FormInput}
		      				label={this.props.labels.confirm_date}/>
	  				</div>
	  			</div>
  			</div>
		);
	}

	_renderUserPart(){
		if(Tools.isAdmin) return null;
		return (
			<div>
				<div className="row">
					<div className="col-md-3">
						<Field
		      				name="sale_staff"
		      				type="select"
		      				options={store.getState()[this.props.reducer].listAdmin}
		      				onInputChange={value => {}}
		      				component={FormInput}
		      				label={this.props.labels.sale_staff}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="customer_staff"
		      				type="select"
		      				options={store.getState()[this.props.reducer].listAdmin}
		      				onInputChange={value => {}}
		      				component={FormInput}
		      				label={this.props.labels.customer_staff}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="order_fee"
		      				type="float"
		      				component={FormInput}
		      				label={this.props.labels.order_fee}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="delivery_fee"
		      				type="number"
		      				component={FormInput}
		      				label={this.props.labels.delivery_fee}/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-3">
						{/*
						<Field
		      				name="created_at"
		      				type="date"
		      				component={FormInput}
		      				label={this.props.labels.created_at}/>
						*/}
		      			<Field
		      				name="created_at"
		      				type="dateRange"
		      				component={FormInput}
		      				label={this.props.labels.created_at}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="updated_at"
		      				type="date"
		      				component={FormInput}
		      				label={this.props.labels.updated_at}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="confirm_date"
		      				type="date"
		      				component={FormInput}
		      				label={this.props.labels.confirm_date}/>
					</div>
					<div className="col-md-3">
						<Field
		      				name="complain_date"
		      				type="date"
		      				component={FormInput}
		      				label={this.props.labels.complain_date}/>
					</div>
				</div>
  			</div>
		);
	}

	_renderCommonPart(){
		return (
			<div>
				<div className="row">
					<div className="col-md-4">
						<Field
		      				name="bill_of_landing_code"
		      				type="text"
		      				component={FormInput}
		      				label={this.props.labels.bill_of_landing_code}/>
					</div>
					<div className="col-md-4">
						<Field
		      				name="purchase_code"
		      				type="text"
		      				component={FormInput}
		      				label={this.props.labels.purchase_code}/>
					</div>
					<div className="col-md-4">
						<Field
		      				name="order_uid"
		      				type="text"
		      				component={FormInput}
		      				label={this.props.labels.order_uid}/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<Field
		      				name="shop_title"
		      				type="text"
		      				component={FormInput}
		      				label={this.props.labels.shop_title}/>
					</div>
					<div className="col-md-4">
						<Field
		      				name="order_item_url"
		      				type="text"
		      				component={FormInput}
		      				label={this.props.labels.order_item_url}/>
					</div>
					<div className="col-md-4">
						<div className="row">
		      				<div className="col-md-6">
								<Field
				      				name="from_total"
				      				type="number"
				      				component={FormInput}
				      				label={this.props.labels.from_total}/>
		      				</div>
		      				<div className="col-md-6">
								<Field
				      				name="to_total"
				      				type="number"
				      				component={FormInput}
				      				label={this.props.labels.to_total}/>
		      				</div>
		      			</div>
					</div>
				</div>
  			</div>
		);
	}

	_renderForm(){
		if(Tools.isAdmin){
			this._renderAdminPart();
		}else{
			this._renderUserPart();
		}
		this._renderCommonPart();
	}

	render() {
		const { handleSubmit, onSubmit, submitting, error, reset } = this.props;
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
      			{this._renderAdminPart()}
      			{this._renderUserPart()}
      			{this._renderCommonPart()}

				<div className="right-align">
					<button className="btn btn-success" disabled={submitting}>
						<span className="glyphicon glyphicon-ok"></span> &nbsp;
						{this.props.submitTitle}
					</button>
				</div>
			</form>
		);
	}
}

export default FilterForm;
