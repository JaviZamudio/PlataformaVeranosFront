import React from 'react';
import { Select, Option, Input, Button } from "@material-tailwind/react";
   
  export function Filtros () {

    return (
        <>
            <div className="flex w-72 flex-col gap-6">
            
                <Select variant="outlined" label="Carrera">
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
                </Select>
                <Select variant="outlined" label="Semestre">
                <Option>1er Semestre</Option>
                <Option>2do Semestre</Option>
                <Option>3er Semestre</Option>
                <Option>4to Semestre</Option>
                <Option>5to Semestre</Option>
                <Option>6to Semestre</Option>
                <Option>7mo Semestre</Option>
                <Option>8vo Semestre</Option>
                </Select>
            </div>
            <div className="relative flex w-full max-w-[24rem]">
                <Input 
                    label='Username' 
                    crossOrigin={undefined}                >
                </Input>
                <Button
                    size="sm"
                    className="!absolute right-1 top-1 rounded"
                >
                    Invite
                </Button>
            </div>
        </>
    );
  }
