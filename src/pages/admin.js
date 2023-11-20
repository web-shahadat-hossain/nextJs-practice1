import DashboardLayout from '@/components/layout/DashboardLayout';
import RootLayout from '@/components/layout/RootLayout';
import React from 'react';


const AdminPage = () => {
    return (
        <div>
            <h1>this is user dashboard</h1>
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
    return (
     <RootLayout>
         <DashboardLayout>
       {page}
      </DashboardLayout>
     </RootLayout>
    )
  }