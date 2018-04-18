import React from 'react';
import PropTypes from 'prop-types';
import values from 'lodash/values';
import forEach from 'lodash/forEach';
import Table from 'rc-table';
import {labels} from './_data';
import Tools from 'helpers/Tools';
import NavWrapper from 'utils/components/NavWrapper';
import CustomModal from 'utils/components/CustomModal';
import MainTable from './tables/Main.table';
import MainForm from './forms/Main.form';
import ReceiptContent from 'components/receiptPreview/components/mainContent/MainContent';
import FilterForm from './forms/Filter.form';
import WaitingMessage from 'utils/components/WaitingMessage';


class UserAccountingLayout extends React.Component {
	static propTypes = {
		bulkRemove: PropTypes.bool
	};
	static defaultProps = {
		bulkRemove: true
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	_renderContent(){
		if(!this.props.dataLoaded){
			return <WaitingMessage/>
		}
		return (
			<div>
				<div className="breadcrumb-container">
					{labels.common.title}
				</div>
				<div className="main-content">
					<FilterForm
						onSubmit={this.props.onFilter}
						labels={labels.filterForm}
						submitTitle="Tìm kiếm"/>
					<br/>
					<MainTable
						{...this.props}
						total={this.props.total}
						listType={this.props.userAccountingReducer.listType}
						listMoneyType={this.props.userAccountingReducer.listMoneyType}
						listItem={this.props.userAccountingReducer.list}/>
				</div>

				<CustomModal
					open={this.props.mainModal}
					close={() => this.props.toggleModal(null, 'mainModal', false)}
					size="md"
					title="UserAccounting manager"
					>
					<div>
						<div className="custom-modal-content">
							<MainForm
								onSubmit={this.props.onChange}
								labels={labels.mainForm}
								submitTitle="Save">

								<button
									type="button"
									className="btn btn-warning cancel"
									onClick={() => this.props.toggleModal(null, 'mainModal', false)}>
									<span className="glyphicon glyphicon-remove"></span> &nbsp;
									Cancel
								</button>
							</MainForm>
						</div>
					</div>
				</CustomModal>

				<CustomModal
					open={this.props.printModal}
					close={() => this.props.toggleModal(null, 'printModal', false)}
					size="full"
					title=""
					>
					<div>
						<div className="custom-modal-content">
							<ReceiptContent data={this.props.userAccountingReducer.receipt}/>
						</div>
					</div>
				</CustomModal>
			</div>
		);
	}

	render() {
		return (
			<NavWrapper data-location={this.props.location} data-user={this.props.authReducer}>
				<div>
					{this._renderContent()}
				</div>
			</NavWrapper>
		);
	}
}

export default UserAccountingLayout;