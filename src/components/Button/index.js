import React from "react";

import { ButtonColor, Load } from "ui/styled";

export default function Button({ children, loading, ...props}){   

    return ( 
        <> 
          <ButtonColor {...props}>
            {
              loading ? <Load /> : <>
                { children }
              </>
            }
          </ButtonColor> 
        </>
    );
  } 
  