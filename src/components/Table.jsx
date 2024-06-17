import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

// Dummy JSON data for blockchain domains
const BLOCKCHAIN_DOMAINS = [
    {
        "domain": "example1.com",
        "expired": false,
        "status": "active",
        "trends": "up",
        "invested": "3BTC"
    },
    {
        "domain": "example2.com",
        "expired": true,
        "status": "inactive",
        "trends": "down",
        "invested": "1.5ETH"
    },
    // Add more domain objects as needed
];

export function Table() {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Blockchain Domain List
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all blockchain domains
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm">
                            View All
                        </Button>
                        <Button className="flex items-center gap-3" size="sm">
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Buy Domain
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    {/* Tabs Component */}
                    <div className="w-full md:w-max">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader>
                                <Tab value="all">All</Tab>
                                <Tab value="active">Active</Tab>
                                <Tab value="inactive">Inactive</Tab>
                                {/* Add more tabs as needed */}
                            </TabsHeader>
                        </Tabs>
                    </div>
                    {/* Search Input Component */}
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            {/* Table Body */}
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full text-left">
                    <thead>
                        <tr>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                                    No <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                </Typography>
                            </th>
                            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                                    Domain <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                </Typography>
                            </th>
                            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                                    Expired <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                </Typography>
                            </th>
                            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                                    Status <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                </Typography>
                            </th>
                            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                                    Trends <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                </Typography>
                            </th>
                            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                                    Renew Domain <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                </Typography>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {BLOCKCHAIN_DOMAINS.map(({ domain, expired, status, trends, invested }, index) => (
                            <tr key={domain}>
                                <td className="p-4 border-b border-blue-gray-50">{index + 1}</td>
                                <td className="p-4 border-b border-blue-gray-50">{domain}</td>
                                <td className="p-4 border-b border-blue-gray-50">  <Chip
                                    color="green"
                                    value={expired ? "Yes" : "No"}
                                    className="rounded-md bg-green-100 text-green-800"
                                /></td>
                                <td className="p-4 border-b border-blue-gray-50"><Chip
                                    color="green"
                                    value={status}
                                    className="rounded-md bg-blue-100 text-blue-800"
                                /></td>
                                <td className="p-4 border-b border-blue-gray-50">{trends}</td>
                                <td className="p-4 border-b border-blue-gray-50"><Chip
                                    color="green"
                                    value={invested}
                                    className="rounded-md bg-blue-100 text-blue-800"
                                /></td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 1 {/* Assuming single page for now */}
                </Typography>
            </CardFooter>
        </Card>
    );
}
