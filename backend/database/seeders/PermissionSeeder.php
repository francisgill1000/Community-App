<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    public function run()
    {
        Permission::truncate();

        $data = [
            ['module' => 'dashboard', 'title' => 'Dashboard access', 'name' => 'dashboard_access'],
            ['module' => 'dashboard', 'title' => 'Dashboard view', 'name' => 'dashboard_view'],
            ['module' => 'dashboard', 'title' => 'Dashboard create', 'name' => 'dashboard_create'],
            ['module' => 'dashboard', 'title' => 'Dashboard edit', 'name' => 'dashboard_edit'],
            ['module' => 'dashboard', 'title' => 'Dashboard delete', 'name' => 'dashboard_delete'],

            ['module' => 'tanent_dashboard', 'title' => 'Tanent dashboard access', 'name' => 'tanent_dashboard_access'],
            ['module' => 'tanent_dashboard', 'title' => 'Tanent dashboard view', 'name' => 'tanent_dashboard_view'],
            ['module' => 'tanent_dashboard', 'title' => 'Tanent dashboard create', 'name' => 'tanent_dashboard_create'],
            ['module' => 'tanent_dashboard', 'title' => 'Tanent dashboard edit', 'name' => 'tanent_dashboard_edit'],
            ['module' => 'tanent_dashboard', 'title' => 'Tanent dashboard delete', 'name' => 'tanent_dashboard_delete'],

            ['module' => 'visitor_dashboard', 'title' => 'Visitor dashboard access', 'name' => 'visitor_dashboard_access'],
            ['module' => 'visitor_dashboard', 'title' => 'Visitor dashboard view', 'name' => 'visitor_dashboard_view'],
            ['module' => 'visitor_dashboard', 'title' => 'Visitor dashboard create', 'name' => 'visitor_dashboard_create'],
            ['module' => 'visitor_dashboard', 'title' => 'Visitor dashboard edit', 'name' => 'visitor_dashboard_edit'],
            ['module' => 'visitor_dashboard', 'title' => 'Visitor dashboard delete', 'name' => 'visitor_dashboard_delete'],

            ['module' => 'delivery_dashboard', 'title' => 'Delivery dashboard access', 'name' => 'delivery_dashboard_access'],
            ['module' => 'delivery_dashboard', 'title' => 'Delivery dashboard view', 'name' => 'delivery_dashboard_view'],
            ['module' => 'delivery_dashboard', 'title' => 'Delivery dashboard create', 'name' => 'delivery_dashboard_create'],
            ['module' => 'delivery_dashboard', 'title' => 'Delivery dashboard edit', 'name' => 'delivery_dashboard_edit'],
            ['module' => 'delivery_dashboard', 'title' => 'Delivery dashboard delete', 'name' => 'delivery_dashboard_delete'],

            ['module' => 'contractor_dashboard', 'title' => 'Contractor dashboard access', 'name' => 'contractor_dashboard_access'],
            ['module' => 'contractor_dashboard', 'title' => 'Contractor dashboard view', 'name' => 'contractor_dashboard_view'],
            ['module' => 'contractor_dashboard', 'title' => 'Contractor dashboard create', 'name' => 'contractor_dashboard_create'],
            ['module' => 'contractor_dashboard', 'title' => 'Contractor dashboard edit', 'name' => 'contractor_dashboard_edit'],
            ['module' => 'contractor_dashboard', 'title' => 'Contractor dashboard delete', 'name' => 'contractor_dashboard_delete'],

            ['module' => 'attendance_report', 'title' => 'Attendance report access', 'name' => 'attendance_report_access'],
            ['module' => 'attendance_report', 'title' => 'Attendance report view', 'name' => 'attendance_report_view'],
            ['module' => 'attendance_report', 'title' => 'Attendance report create', 'name' => 'attendance_report_create'],
            ['module' => 'attendance_report', 'title' => 'Attendance report edit', 'name' => 'attendance_report_edit'],
            ['module' => 'attendance_report', 'title' => 'Attendance report delete', 'name' => 'attendance_report_delete'],

            ['module' => 'attendance_report_regeneration', 'title' => 'Attendance report Re-Generate Log access', 'name' => 'attendance_report_regeneration_access'],
            ['module' => 'attendance_report_regeneration', 'title' => 'Attendance report Re-Generate Log view', 'name' => 'attendance_report_regeneration_view'],
            ['module' => 'attendance_report_regeneration', 'title' => 'Attendance report Re-Generate Log create', 'name' => 'attendance_report_regeneration_create'],
            ['module' => 'attendance_report_regeneration', 'title' => 'Attendance report Re-Generate Log edit', 'name' => 'attendance_report_regeneration_edit'],
            ['module' => 'attendance_report_regeneration', 'title' => 'Attendance report Re-Generate Log delete', 'name' => 'attendance_report_regeneration_delete'],

            ['module' => 'attendance_report_manual_entry', 'title' => 'Attendance report Re-Generate Log access', 'name' => 'attendance_report_manual_entry_access'],
            ['module' => 'attendance_report_manual_entry', 'title' => 'Attendance report Re-Generate Log view', 'name' => 'attendance_report_manual_entry_view'],
            ['module' => 'attendance_report_manual_entry', 'title' => 'Attendance report Re-Generate Log create', 'name' => 'attendance_report_manual_entry_create'],
            ['module' => 'attendance_report_manual_entry', 'title' => 'Attendance report Re-Generate Log edit', 'name' => 'attendance_report_manual_entry_edit'],
            ['module' => 'attendance_report_manual_entry', 'title' => 'Attendance report Re-Generate Log delete', 'name' => 'attendance_report_manual_entry_delete'],

            ['module' => 'contractor_company', 'title' => 'Contractor company access', 'name' => 'contractor_company_access'],
            ['module' => 'contractor_company', 'title' => 'Contractor company view', 'name' => 'contractor_company_view'],
            ['module' => 'contractor_company', 'title' => 'Contractor company create', 'name' => 'contractor_company_create'],
            ['module' => 'contractor_company', 'title' => 'Contractor company edit', 'name' => 'contractor_company_edit'],
            ['module' => 'contractor_company', 'title' => 'Contractor company delete', 'name' => 'contractor_company_delete'],

            ['module' => 'department', 'title' => 'Department access', 'name' => 'department_access'],
            ['module' => 'department', 'title' => 'Department view', 'name' => 'department_view'],
            ['module' => 'department', 'title' => 'Department create', 'name' => 'department_create'],
            ['module' => 'department', 'title' => 'Department edit', 'name' => 'department_edit'],
            ['module' => 'department', 'title' => 'Department delete', 'name' => 'department_delete'],

            ['module' => 'sub_department', 'title' => 'Sub department access', 'name' => 'sub_department_access'],
            ['module' => 'sub_department', 'title' => 'Sub department view', 'name' => 'sub_department_view'],
            ['module' => 'sub_department', 'title' => 'Sub department create', 'name' => 'sub_department_create'],
            ['module' => 'sub_department', 'title' => 'Sub department edit', 'name' => 'sub_department_edit'],
            ['module' => 'sub_department', 'title' => 'Sub department delete', 'name' => 'sub_department_delete'],

            ['module' => 'designation', 'title' => 'Designation access', 'name' => 'designation_access'],
            ['module' => 'designation', 'title' => 'Designation view', 'name' => 'designation_view'],
            ['module' => 'designation', 'title' => 'Designation create', 'name' => 'designation_create'],
            ['module' => 'designation', 'title' => 'Designation edit', 'name' => 'designation_edit'],
            ['module' => 'designation', 'title' => 'Designation delete', 'name' => 'designation_delete'],


            ['module' => 'profile', 'title' => 'profile access', 'name' => 'profile_access'],
            ['module' => 'profile', 'title' => 'profile view', 'name' => 'profile_view'],
            ['module' => 'profile', 'title' => 'profile create', 'name' => 'profile_create'],
            ['module' => 'profile', 'title' => 'profile edit', 'name' => 'profile_edit'],
            ['module' => 'profile', 'title' => 'profile delete', 'name' => 'profile_delete'],

            ['module' => 'role', 'title' => 'Role access', 'name' => 'role_access'],
            ['module' => 'role', 'title' => 'Role view', 'name' => 'role_view'],
            ['module' => 'role', 'title' => 'Role create', 'name' => 'role_create'],
            ['module' => 'role', 'title' => 'Role edit', 'name' => 'role_edit'],
            ['module' => 'role', 'title' => 'Role delete', 'name' => 'role_delete'],

            ['module' => 'assign_permission', 'title' => 'Assign permission access', 'name' => 'assign_permission_access'],
            ['module' => 'assign_permission', 'title' => 'Assign permission view', 'name' => 'assign_permission_view'],
            ['module' => 'assign_permission', 'title' => 'Assign permission create', 'name' => 'assign_permission_create'],
            ['module' => 'assign_permission', 'title' => 'Assign permission edit', 'name' => 'assign_permission_edit'],
            ['module' => 'assign_permission', 'title' => 'Assign permission delete', 'name' => 'assign_permission_delete'],

            ['module' => 'device', 'title' => 'Device access', 'name' => 'device_access'],
            ['module' => 'device', 'title' => 'Device view', 'name' => 'device_view'],
            ['module' => 'device', 'title' => 'Device create', 'name' => 'device_create'],
            ['module' => 'device', 'title' => 'Device edit', 'name' => 'device_edit'],
            ['module' => 'device', 'title' => 'Device delete', 'name' => 'device_delete'],

            ['module' => 'announcement', 'title' => 'Announcement access', 'name' => 'announcement_access'],
            ['module' => 'announcement', 'title' => 'Announcement view', 'name' => 'announcement_view'],
            ['module' => 'announcement', 'title' => 'Announcement create', 'name' => 'announcement_create'],
            ['module' => 'announcement', 'title' => 'Announcement edit', 'name' => 'announcement_edit'],
            ['module' => 'announcement', 'title' => 'Announcement delete', 'name' => 'announcement_delete'],

            ['module' => 'announcement_category', 'title' => 'Announcement category access', 'name' => 'announcement_category_access'],
            ['module' => 'announcement_category', 'title' => 'Announcement category view', 'name' => 'announcement_category_view'],
            ['module' => 'announcement_category', 'title' => 'Announcement category create', 'name' => 'announcement_category_create'],
            ['module' => 'announcement_category', 'title' => 'Announcement category edit', 'name' => 'announcement_category_edit'],
            ['module' => 'announcement_category', 'title' => 'Announcement category delete', 'name' => 'announcement_category_delete'],

            ['module' => 'web_logs', 'title' => 'Web Logs access', 'name' => 'web_logs_access'],
            ['module' => 'web_logs', 'title' => 'Web Logs view', 'name' => 'web_logs_view'],
            ['module' => 'web_logs', 'title' => 'Web Logs create', 'name' => 'web_logs_create'],
            ['module' => 'web_logs', 'title' => 'Web Logs edit', 'name' => 'web_logs_edit'],
            ['module' => 'web_logs', 'title' => 'Web Logs delete', 'name' => 'web_logs_delete'],

            ['module' => 'tanent', 'title' => 'Tanent access', 'name' => 'tanent_access'],
            ['module' => 'tanent', 'title' => 'Tanent view', 'name' => 'tanent_view'],
            ['module' => 'tanent', 'title' => 'Tanent create', 'name' => 'tanent_create'],
            ['module' => 'tanent', 'title' => 'Tanent edit', 'name' => 'tanent_edit'],
            ['module' => 'tanent', 'title' => 'Tanent delete', 'name' => 'tanent_delete'],

            ['module' => 'visitor', 'title' => 'Visitor access', 'name' => 'visitor_access'],
            ['module' => 'visitor', 'title' => 'Visitor view', 'name' => 'visitor_view'],
            ['module' => 'visitor', 'title' => 'Visitor create', 'name' => 'visitor_create'],
            ['module' => 'visitor', 'title' => 'Visitor edit', 'name' => 'visitor_edit'],
            ['module' => 'visitor', 'title' => 'Visitor delete', 'name' => 'visitor_delete'],

            ['module' => 'delivery', 'title' => 'Delivery access', 'name' => 'delivery_access'],
            ['module' => 'delivery', 'title' => 'Delivery view', 'name' => 'delivery_view'],
            ['module' => 'delivery', 'title' => 'Delivery create', 'name' => 'delivery_create'],
            ['module' => 'delivery', 'title' => 'Delivery edit', 'name' => 'delivery_edit'],
            ['module' => 'delivery', 'title' => 'Delivery delete', 'name' => 'delivery_delete'],

            ['module' => 'contractor', 'title' => 'Contractor access', 'name' => 'contractor_access'],
            ['module' => 'contractor', 'title' => 'Contractor view', 'name' => 'contractor_view'],
            ['module' => 'contractor', 'title' => 'Contractor create', 'name' => 'contractor_create'],
            ['module' => 'contractor', 'title' => 'Contractor edit', 'name' => 'contractor_edit'],
            ['module' => 'contractor', 'title' => 'Contractor delete', 'name' => 'contractor_delete'],

            ['module' => 'maid', 'title' => 'Maid access', 'name' => 'maid_access'],
            ['module' => 'maid', 'title' => 'Maid view', 'name' => 'maid_view'],
            ['module' => 'maid', 'title' => 'Maid create', 'name' => 'maid_create'],
            ['module' => 'maid', 'title' => 'Maid edit', 'name' => 'maid_edit'],
            ['module' => 'maid', 'title' => 'Maid delete', 'name' => 'maid_delete'],

            ['module' => 'parking', 'title' => 'Parking access', 'name' => 'parking_access'],
            ['module' => 'parking', 'title' => 'Parking view', 'name' => 'parking_view'],
            ['module' => 'parking', 'title' => 'Parking create', 'name' => 'parking_create'],
            ['module' => 'parking', 'title' => 'Parking edit', 'name' => 'parking_edit'],
            ['module' => 'parking', 'title' => 'Parking delete', 'name' => 'parking_delete'],

            ['module' => 'purpose', 'title' => 'Purpose access', 'name' => 'purpose_access'],
            ['module' => 'purpose', 'title' => 'Purpose view', 'name' => 'purpose_view'],
            ['module' => 'purpose', 'title' => 'Purpose create', 'name' => 'purpose_create'],
            ['module' => 'purpose', 'title' => 'Purpose edit', 'name' => 'purpose_edit'],
            ['module' => 'purpose', 'title' => 'Purpose delete', 'name' => 'purpose_delete'],

            ['module' => 'community_setup', 'title' => 'Community setup access', 'name' => 'community_setup_access'],
            ['module' => 'community_setup', 'title' => 'Community setup view', 'name' => 'community_setup_view'],
            ['module' => 'community_setup', 'title' => 'Community setup create', 'name' => 'community_setup_create'],
            ['module' => 'community_setup', 'title' => 'Community setup edit', 'name' => 'community_setup_edit'],
            ['module' => 'community_setup', 'title' => 'Community setup delete', 'name' => 'community_setup_delete'],


            ['module' => 'shift', 'title' => 'Shift access', 'name' => 'shift_access'],
            ['module' => 'shift', 'title' => 'Shift view', 'name' => 'shift_view'],
            ['module' => 'shift', 'title' => 'Shift create', 'name' => 'shift_create'],
            ['module' => 'shift', 'title' => 'Shift edit', 'name' => 'shift_edit'],
            ['module' => 'shift', 'title' => 'Shift delete', 'name' => 'shift_delete'],

            ['module' => 'schedule', 'title' => 'Schedule access', 'name' => 'schedule_access'],
            ['module' => 'schedule', 'title' => 'Schedule view', 'name' => 'schedule_view'],
            ['module' => 'schedule', 'title' => 'Schedule create', 'name' => 'schedule_create'],
            ['module' => 'schedule', 'title' => 'Schedule edit', 'name' => 'schedule_edit'],
            ['module' => 'schedule', 'title' => 'Schedule delete', 'name' => 'schedule_delete'],

            ['module' => 'logs', 'title' => 'Log access', 'name' => 'logs_access'],
            ['module' => 'logs', 'title' => 'Log view', 'name' => 'logs_view'],
            ['module' => 'logs', 'title' => 'Log create', 'name' => 'logs_create'],
            ['module' => 'logs', 'title' => 'Log edit', 'name' => 'logs_edit'],
            ['module' => 'logs', 'title' => 'Log delete', 'name' => 'logs_delete'],

            ['module' => 'employee_device_photo_upload', 'title' => 'Employee device Photo Upload access', 'name' => 'employee_device_photo_upload_access'],
            ['module' => 'employee_device_photo_upload', 'title' => 'Employee device Photo Upload view', 'name' => 'employee_device_photo_upload_view'],
            ['module' => 'employee_device_photo_upload', 'title' => 'Employee device Photo Upload create', 'name' => 'employee_device_photo_upload_create'],
            ['module' => 'employee_device_photo_upload', 'title' => 'Employee device Photo Upload edit', 'name' => 'employee_device_photo_upload_edit'],
            ['module' => 'employee_device_photo_upload', 'title' => 'Employee device Photo Upload delete', 'name' => 'employee_device_photo_upload_delete'],

            ['module' => 'employee', 'title' => 'Employee access', 'name' => 'employee_access'],
            ['module' => 'employee', 'title' => 'Employee view', 'name' => 'employee_view'],
            ['module' => 'employee', 'title' => 'Employee create', 'name' => 'employee_create'],
            ['module' => 'employee', 'title' => 'Employee edit', 'name' => 'employee_edit'],
            ['module' => 'employee', 'title' => 'Employee delete', 'name' => 'employee_delete'],

            ['module' => 'announcement', 'title' => 'Announcement access', 'name' => 'announcement_access'],
            ['module' => 'announcement', 'title' => 'Announcement view', 'name' => 'announcement_view'],
            ['module' => 'announcement', 'title' => 'Announcement create', 'name' => 'announcement_create'],
            ['module' => 'announcement', 'title' => 'Announcement edit', 'name' => 'announcement_edit'],
            ['module' => 'announcement', 'title' => 'Announcement delete', 'name' => 'announcement_delete'],

            ['module' => 'announcement_category', 'title' => 'Announcement Category access', 'name' => 'announcement_category_access'],
            ['module' => 'announcement_category', 'title' => 'Announcement Category view', 'name' => 'announcement_category_view'],
            ['module' => 'announcement_category', 'title' => 'Announcement Category create', 'name' => 'announcement_category_create'],
            ['module' => 'announcement_category', 'title' => 'Announcement Category edit', 'name' => 'announcement_category_edit'],
            ['module' => 'announcement_category', 'title' => 'Announcement Category delete', 'name' => 'announcement_category_delete'],

            ['module' => 'device_offline', 'title' => 'Device Notification access', 'name' => 'device_notification_contnet_access'],
            ['module' => 'device_offline', 'title' => 'Device Notification view', 'name' => 'device_notification_contnet_view'],
            ['module' => 'device_offline', 'title' => 'Device Notification create', 'name' => 'device_notification_contnet_create'],
            ['module' => 'device_offline', 'title' => 'Device Notification edit', 'name' => 'device_notification_contnet_edit'],
            ['module' => 'device_offline', 'title' => 'Device Notification delete', 'name' => 'device_notification_contnet_delete'],



        ];

        // // run this command to seed the data => php artisan db:seed --class=PermissionSeeder
        // Permission::insert($data);



        foreach ($data as $key => $dataArray) {
            Permission::updateOrCreate(['name' => $dataArray['name']], $dataArray);
        }

        // run this command to seed the data => php artisan db:seed --class=PermissionSeeder
        // Permission::insert($data);
    }
}
