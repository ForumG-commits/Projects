import React from 'react'
import { Card, CardContent, Typography} from "@material-ui/core"
function InfoBox({title, cases, total}) {
    return (
        <Card className="infoBox__title">
          <CardContent>
              {/*Titile*/}
              <Typography color="textSecondary">
                  {title}
              </Typography>

               {/* +120 Number of Cases*/}
              <h2 className="infoBox__cases">{cases}</h2>
             
             {/* 1.2M total*/}
              <Typography className="infoBox__total" color="textSecondary">
                  {total} Total
              </Typography >
              
          </CardContent>
 
        </Card>
    )
}

export default InfoBox