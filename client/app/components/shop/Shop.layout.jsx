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
import WaitingMessage from 'utils/components/WaitingMessage';


class ShopLayout extends React.Component {
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
					<MainTable {...this.props}/>
				</div>

				<CustomModal
					open={this.props.mainModal}
					close={() => this.props.toggleModal(null, 'mainModal', false)}
					size="md"
					title="Shop manager"
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

ShopLayout.propTypes = {
	bulkRemove: PropTypes.bool
};

ShopLayout.defaultProps = {
	bulkRemove: true
};

export default ShopLayout;
