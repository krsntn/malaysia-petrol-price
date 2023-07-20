import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    from: "July 20, 2023",
    through: "July 26, 2023",
    ron95: ["RM 2.05", "RM 0"],
    ron97: ["RM 3.37", "RM 0"],
    diesel: ["RM 2.15", "RM 0"],
  },
  {
    from: "July 13, 2023",
    through: "July 19, 2023",
    ron95: ["RM 2.05", "RM 0"],
    ron97: ["RM 3.37", "RM 0"],
    diesel: ["RM 2.15", "RM 0"],
  },
  {
    from: "July 6, 2023",
    through: "July 12, 2023",
    ron95: ["RM 2.05", "RM 0"],
    ron97: ["RM 3.37", "RM 0"],
    diesel: ["RM 2.15", "RM 0"],
  },
  {
    from: "June 29, 2023",
    through: "July 5, 2023",
    ron95: ["RM 2.05", "RM 0"],
    ron97: ["RM 3.37", "RM 0"],
    diesel: ["RM 2.15", "RM 0"],
  },
  {
    from: "June 22, 2023",
    through: "June 28, 2023",
    ron95: ["RM 2.05", "RM 0"],
    ron97: ["RM 3.37", "RM 0"],
    diesel: ["RM 2.15", "RM 0"],
  },
  {
    from: "June 15, 2023",
    through: "June 21, 2023",
    ron95: ["RM 2.05", "RM 0"],
    ron97: ["RM 3.37", "RM 0"],
    diesel: ["RM 2.15", "RM 0"],
  },
];

function App() {
  return (
    <>
      <div className="max-w-2xl m-auto">
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-yellow-500 text-white">
            <CardHeader>
              <CardTitle>RON 95</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{data[0].ron95[0]}</p>
            </CardContent>
          </Card>
          <Card className="bg-green-700 text-white">
            <CardHeader>
              <CardTitle>RON 97</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{data[0].ron97[0]}</p>
            </CardContent>
          </Card>
          <Card className="bg-black text-white">
            <CardHeader>
              <CardTitle className="break-all">DIESEL</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{data[0].diesel[0]}</p>
            </CardContent>
          </Card>
        </div>

        <div className="h-[50px]" />

        <Table>
          <TableCaption>Malaysia petrol fuel price history.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-[26%]">From</TableHead>
              <TableHead className="text-center w-[26%]">Through</TableHead>
              <TableHead className="text-center w-[16%]">RON 95</TableHead>
              <TableHead className="text-center w-[16%]">RON 97</TableHead>
              <TableHead className="text-center w-[16%]">Diesel</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((x, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="text-center align-text-top">
                    {x.from}
                  </TableCell>
                  <TableCell className="text-center align-text-top">
                    {x.through}
                  </TableCell>
                  <TableCell className="text-center align-text-top font-medium">
                    {x.ron95[0]}
                    {x.ron95[1] !== "RM 0" && (
                      <>
                        <br />
                        {x.ron95[1]}
                      </>
                    )}
                  </TableCell>
                  <TableCell className="text-center align-text-top font-medium">
                    {x.ron97[0]}
                    {x.ron97[1] !== "RM 0" && (
                      <>
                        <br />({x.ron97[1]})
                      </>
                    )}
                  </TableCell>
                  <TableCell className="text-center align-text-top font-medium">
                    {x.diesel[0]}
                    {x.diesel[1] !== "RM 0" && (
                      <>
                        <br />({x.diesel[1]})
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className="text-xs my-10">
          © 2020, Built by <a href="https://dev.krsn.xyz">Karson</a>
        </div>
      </div>
    </>
  );
}

export default App;
