import DashboardLayout from '@/components/layout/DashboardLayout';
import React from 'react';

const UserDashboard = () => {
    return (
        <div>
            <h1>this is user dashboard</h1>
        </div>
    );
};

export default UserDashboard;

UserDashboard.getLayout = function getLayout(page) {
    return (
      <DashboardLayout>
       {page}
      </DashboardLayout>
    )
  }