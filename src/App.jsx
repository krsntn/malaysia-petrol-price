import { useEffect, useState } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

function initialData() {
  const data = {
    from: "-",
    through: "-",
    ron95: ["-", "RM 0"],
    ron97: ["-", "RM 0"],
    diesel: ["-", "RM 0"],
  };

  return Array(10)
    .fill()
    .map(() => data);
}

function App() {
  const [data, setData] = useState(() => initialData());

  useEffect(() => {
    fetch("https://dulcet-kringle-c21419.netlify.app/.netlify/functions/petrol")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-full min-h-[100dvh] p-4 max-w-2xl m-auto flex flex-col justify-around">
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-yellow-500 text-white">
          <CardHeader>
            <CardTitle>RON 95</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {data[0].ron95[0] === "-" ? (
                <Skeleton className="h-4 w-full" />
              ) : (
                data[0].ron95[0]
              )}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-green-700 text-white">
          <CardHeader>
            <CardTitle>RON 97</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {data[0].ron97[0] === "-" ? (
                <Skeleton className="h-4 w-full" />
              ) : (
                data[0].ron97[0]
              )}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle className="break-all">DIESEL</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {data[0].diesel[0] === "-" ? (
                <Skeleton className="h-4 w-full" />
              ) : (
                data[0].diesel[0]
              )}
            </p>
          </CardContent>
        </Card>
      </div>

      <ScrollArea className="h-[50dvh] md:h-[70dvh] w-full">
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
                    {x.from === "-" ? (
                      <Skeleton className="h-4 w-full" />
                    ) : (
                      x.from
                    )}
                  </TableCell>
                  <TableCell className="text-center align-text-top">
                    {x.through === "-" ? (
                      <Skeleton className="h-4 w-full" />
                    ) : (
                      x.through
                    )}
                  </TableCell>
                  <TableCell className="text-center align-text-top font-medium">
                    {x.ron95[0] === "-" ? (
                      <Skeleton className="h-4 w-full" />
                    ) : (
                      x.ron95[0]
                    )}

                    {x.ron95[1] !== "RM 0" && (
                      <>
                        <br />
                        {x.ron95[1]}
                      </>
                    )}
                  </TableCell>
                  <TableCell className="text-center align-text-top font-medium">
                    {x.ron97[0] === "-" ? (
                      <Skeleton className="h-4 w-full" />
                    ) : (
                      x.ron97[0]
                    )}

                    {x.ron97[1] !== "RM 0" && (
                      <>
                        <br />({x.ron97[1]})
                      </>
                    )}
                  </TableCell>
                  <TableCell className="text-center align-text-top font-medium">
                    {x.diesel[0] === "-" ? (
                      <Skeleton className="h-4 w-full" />
                    ) : (
                      x.diesel[0]
                    )}
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
      </ScrollArea>

      <div className="text-xs mt-10">
        © 2020, Built by <a href="https://dev.krsn.xyz">Karson</a>
      </div>
    </div>
  );
}

export default App;
