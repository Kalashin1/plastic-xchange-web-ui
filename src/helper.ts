import {
  CreateOTPAccountPayload,
  Location,
  ReturnPayloadParam,
  UserInterface,
  withdrawalInfo,
  USER_TYPE,
  PLASTIC_OBJ,
  PlasticInterface
} from './types';
export const baseUrl = 'https://api.plasticxcange.com'
// export const baseUrl = 'http://localhost:4200';

export const formatDate = (date: string) => {
  let _date = new Date(date);
  const day = _date.getDate();
  const month = _date.getMonth()
  const year = _date.getFullYear()
  return `${day}/${month}/${year}`;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',
})

export const CreateAccount = async (payload: CreateOTPAccountPayload) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  })

  if (res.ok) {
    const { error, message, data }: ReturnPayloadParam<[UserInterface, string]> = await res.json();

    if (error) {
      return [null, message]
    }

    return [data, null]
  } else {
    return [null, await res.json()]
  }
}

export const verifyOTP = async (otp: number, username: string) => {
  try {
    const res = await fetch(`${baseUrl}/user/otp/${otp}/${username}`);

    if (res.ok) {
      const { error, data, message }: ReturnPayloadParam<UserInterface> = await res.json();
      if (!error) {
        return [data, null]
      } else {
        return [null, message]
      }
    } else {
      const data = await res.json();
      return [null, data.message]
    }
  } catch (error: any) {
    return [false, error.message]
  }
}

export const updateBankInfo = async (id: string, token: string, payload: withdrawalInfo) => {
  const res = await fetch(`${baseUrl}/user/bankInfo/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })

  if (res.ok) {
    const { error, message }: ReturnPayloadParam<string> = await res.json();

    if (error) {
      return [null, message]
    } else {
      return [message, null]
    }
  } else {
    return [null, await res.json()]
  }
}

export const UpdateProfile = async (
  token: string,
  id: string, payload: { name: string, phoneNumber: string }
) => {
  try {
    const res = await fetch(`${baseUrl}/user/profile/${id}/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const data = await res.json();
      if (!data.error) {
        return [data.data, null]
      } else {
        return [null, data.message]
      }
    } else {
      const data = await res.json();
      return [null, data.message]
    }
  } catch (error: any) {
    return [false, error.message]
  }
}

export const updateUserAddress = async (
  id: string,
  token: string,
  payload: Location
) => {

  try {
    const res = await fetch(`${baseUrl}/user/location/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })

    if (res.ok) {
      const { error, message }: ReturnPayloadParam<null> = await res.json();

      if (error) {
        return [null, message]
      } else {
        return [message, null]
      }
    } else {
      return [null, await res.json()]
    }
  } catch (error: any) {
    return [null, error.message]
  }
}

export const getUser = async (token: string) => {
  const res = await fetch(`${baseUrl}/user/token/${token}`)

  if (res.ok) {
    const data = await res.json();

    if (data.error) {
      return [null, data.message]
    } else {
      return [data.data, null]
    }
  } else {
    const { message } = await res.json();
    return [null, message];
  }
}

export const getUserById = async (id: string) => {
  const res = await fetch(`${baseUrl}/user/id/${id}`)

  if (res.ok) {
    const data = await res.json();

    if (data.error) {
      return [null, data.message]
    } else {
      return [data.data, null]
    }
  } else {
    const { message } = await res.json();
    return [null, message];
  }
}

export const widthdraw = async (token: string, amount: number, userId: string) => {
  // console.log({ amount, userId })
  const res = await fetch(`${baseUrl}/withdraw`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify({ amount, userId })
  })

  if (res.ok) {
    const data = await res.json();
    // console.log(data)

    if (data.error) {
      // console.log(data.message);
      return [null, data.message]
    } else {
      return [data.data, null]
    }
  } else {
    return [null, await res.json()]
  }
}

export const getUserExchanges = async (token: string, username: string, userType: USER_TYPE) => {
  const res = await fetch(`${baseUrl}/${userType}/projects/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (res.ok) {
    const data = await res.json();
    if (data.error) {
      return [null, data.message]
    } else {
      return [data.data, null]
    }
  } else {
    return [null, await res.json()]
  }
}


export const getPlastics = async (token: string) => {
  const res = await fetch(`${baseUrl}/plastics`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })


  if (res.ok) {
    const data = await res.json();
    if (!data.error) {
      return [data.data, null]
    } else {
      return [null, data.message]
    }
  } else {
    const data = await res.json();
    return [null, data.message]
  }
}

export const getAgentUsers = async (token: string, id: string) => {
  const res = await fetch(`${baseUrl}/agent/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (res.ok) {
    const data = await res.json();

    if (data.error) {
      return [null, data.message]
    } else {
      console.log(data.data)
      return [data.data, null]
    }
  } else {
    return [null, await res.json()]
  }
}

export const createPlasticExchange = async (payload: PLASTIC_OBJ, token: string) => {
  console.log(payload);
  const res = await fetch(`${baseUrl}/project`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (res.ok) {
    const data = await res.json();
    if (data.error) {
      return [null, data.message];
    } else {
      return [data.data, null];
    }
  } else {
    console.log(await res.json())
    return [null, await res.json()]
  }
}

export const editPlasticExchange = async (payload: Partial<PlasticInterface>, token: string) => {
  const res = await fetch(`${baseUrl}/project/`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  if (res.ok) {
    const data = await res.json();
    if (!data.error) {
      return [data.data, null]
    } else {
      return [null, data.message]
    }
  } else {
    const data = await res.json();
    return [null, data.message]
  }
  
} 

export const getPlastic = async (token: string, id: string) => {
  const res = await fetch(`${baseUrl}/project/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (res.ok) {
    const data = await res.json();

    if (data.error) {
      return [null, data.message, res.status]
    } else {
      return [data.data, null, res.status]
    }
  } else {
    return [null, await res.json(), res.status]
  }
}