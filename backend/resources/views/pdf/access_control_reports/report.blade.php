<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Access Control Report</title>
    <style>
        * {
            padding: 0px;
            margin: 0;
            font-family: "Open Sans", sans-serif;
            font-size: 9pt;
            color: #777777;
        }

        body {
            margin: 25px 25px 0 25px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        th,
        td {
            border: 1px solid #dddddd;
            padding: 4px;
            text-align: left;
        }

        .text-left {
            text-align: left;
        }

        .text-center {
            text-align: center;
        }

        .text-right {
            text-align: right;
        }

        .logo {
            max-width: 150px;
            height: auto;
        }

        .red {
            background-color: red;
        }

        .green {
            background-color: green;
        }

        .blue {
            background-color: blue;
        }

        .col-1 {
            width: 8.3%;
        }

        .col-2 {
            width: 16.6%;
        }

        .col-3 {
            width: 24.9%;
        }

        .col-4 {
            width: 33.2%;
        }

        .uppercase {
            text-transform: uppercase;
        }

        .border-top {
            border-top: 1px solid #dddddd;
            /* Add top border */
        }

        .border-bottom {
            border-bottom: 1px solid #dddddd;
            /* Add top border */
        }

        .border-none {
            border: none;
            /* Add top border */
        }

        .mt-1 {
            margin-top: 5px;
            /* Add top border */
        }

        .mt-2 {
            margin-top: 10px;
            /* Add top border */
        }

        .mt-3 {
            margin-top: 15px;
            /* Add top border */
        }

        .mt-4 {
            margin-top: 20px;
            /* Add top border */
        }

        .mt-5 {
            margin-top: 25px;
            /* Add top border */
        }

        .page-break {
            page-break-before: auto;
            page-break-after: auto;
            /* Add this for proper page breaks */
        }

        footer {
            position: fixed;
            right: 0px;
            bottom: 10px;
            text-align: center;
            counter-reset: pageTotal;
            width: 100%;

        }

        .circle-container {
            text-align: left;
        }

        .circle-container img {
            border-radius: 50%;
            max-width: 100%;
            vertical-align: middle;
            /* Adjust as needed for spacing */
        }

        footer .page:before {
            content: counter(page, decimal);
        }

        footer .page:after {
            counter-increment: counter(page, decimal);
        }

        .pageCounter span {
            counter-increment: pageTotal;
        }
    </style>
</head>

<body>
    <div>

        <table>
            <tr>
                <td class="text-left border-none col-4">
                    <div class="logo pt">
                        <img height="75" width="75"
                            src="{{ !empty($company->logo_raw) ? env('BASE_URL') . '/' . $company->logo_raw : '' }}"
                            alt="Company Logo" />

                    </div>
                </td>
                <td class="text-center border-none col-4 uppercase">
                    <div>
                        <b>{{ $report_type ?? 'Access Control Report' }} </b>
                    </div>
                    <div>
                        <b>{{ date('d M y', strtotime($date)) }} </b>
                    </div>
                </td>
                <td class="text-right border-none col-4">
                    <div class="company-info">
                        <h3>{{ $company->name ?? '---' }}</h3>
                        <p>{{ $company->location ?? '---' }}</p>
                        <p>{{ $company->contact->number ?? '---' }}, {{ $company->user->email ?? '---' }}</p>
                    </div>
                </td>
            </tr>
        </table>
        <table class="mt-5">
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>In</th>
                <th>Out</th>
                <th>Status</th>
                <th>Mode</th>
                <th>User Type</th>
            </tr>
            @foreach ($chunk as $key => $data)
                <tr>
                    <td style="width:10px;">{{ $key + 1 }}</td>
                    <td>
                        @if (isset($data['tanent']) && $data['tanent'])
                            <b style="margin-left:5px;">
                                {{ $data['tanent']['first_name'] ?? '---' }}
                                {{ $data['tanent']['last_name'] ?? '---' }}
                            </b>
                            <br>
                            <small style="margin-left:5px;">{{ $data['tanent']['system_user_id'] ?? '---' }}</small>
                        @elseif (isset($data['family_member']) && $data['family_member'])
                            <b style="margin-left:5px;">
                                {{ $data['family_member']['first_name'] ?? '---' }}
                                {{ $data['family_member']['last_name'] ?? '---' }}
                            </b>
                            <br>
                            <small
                                style="margin-left:5px;">{{ $data['family_member']['system_user_id'] ?? '---' }}</small>
                        @elseif (isset($data['owner']) && $data['owner'])
                            <b style="margin-left:5px;">
                                {{ $data['owner']['first_name'] ?? '---' }}
                                {{ $data['owner']['last_name'] ?? '---' }}
                            </b>
                            <br>
                            <small style="margin-left:5px;">{{ $data['owner']['system_user_id'] ?? '---' }}</small>
                        @elseif (isset($data['maid']) && $data['maid'])
                            <b style="margin-left:5px;">
                                {{ $data['maid']['first_name'] ?? '---' }}
                                {{ $data['maid']['last_name'] ?? '---' }}
                            </b>
                            <br>
                            <small style="margin-left:5px;">{{ $data['maid']['system_user_id'] ?? '---' }}</small>
                        @elseif (isset($data['visitor']) && $data['visitor'])
                            <b style="margin-left:5px;">
                                {{ $data['visitor']['first_name'] ?? '---' }}
                                {{ $data['visitor']['last_name'] ?? '---' }}
                            </b>
                            <br>
                            <small style="margin-left:5px;">{{ $data['visitor']['system_user_id'] ?? '---' }}</small>
                        @elseif (isset($data['delivery']) && $data['delivery'])
                            <b style="margin-left:5px;">
                                {{ $data['delivery']['first_name'] ?? '---' }}
                                {{ $data['delivery']['last_name'] ?? '---' }}
                            </b>
                            <br>
                            <small style="margin-left:5px;">{{ $data['delivery']['system_user_id'] ?? '---' }}</small>
                        @elseif (isset($data['contractor']) && $data['contractor'])
                            <b style="margin-left:5px;">
                                {{ $data['contractor']['first_name'] ?? '---' }}
                                {{ $data['contractor']['last_name'] ?? '---' }}
                            </b>
                            <br>
                            <small
                                style="margin-left:5px;">{{ $data['contractor']['system_user_id'] ?? '---' }}</small>
                        @elseif (isset($data['employee']) && $data['employee'])
                            <b style="margin-left:5px;">
                                {{ $data['employee']['first_name'] ?? '---' }}
                                {{ $data['employee']['last_name'] ?? '---' }}
                            </b>
                            <br>
                            <small style="margin-left:5px;">{{ $data['employee']['system_user_id'] ?? '---' }}</small>
                        @else
                            ---
                        @endif
                    </td>
                    <td>
                        {{ $data['LogTime'] ?? '---' }}
                        <br />
                        <small> {{ $data['device']['short_name'] ?? '---' }}</small>
                    </td>
                    <td>
                        ---
                        <br />
                        <small> ---</small>
                    </td>
                    <td>
                        {{ $data['status'] ?? '---' }}
                    </td>
                    <td>
                        {{ $data['mode'] ?? '---' }}
                    </td>
                    <td>{{ $data['community_report']['user_type'] ?? '---' }}</td>
                </tr>
            @endforeach
        </table>
        <footer class="page page-break">
            <hr class="mt-1" style="color:#dddddd;">
            <table>
                <tr>
                    <td class="text-left border-none col-4">
                        <div>
                            Printed On {{ date('d M Y') }}
                        </div>
                    </td>
                    <td class="text-center border-none col-4 ">
                        <div>
                            This is system generated report
                        </div>
                    </td>
                    <td class="text-right border-none col-4">
                        <div class="company-info">
                            {{ $currentPage }} / {{ $totalPages }}

                        </div>
                    </td>
                </tr>
            </table>
        </footer>
    </div>
</body>

</html>
